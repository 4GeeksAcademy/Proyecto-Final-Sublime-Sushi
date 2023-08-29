"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, TokenBlockedList
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager
from datetime import timedelta
import mercadopago

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Configuracion JWTManager
app.config["JWT_SECRET_KEY"] = os.getenv("FLASK_APP_KEY")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt=JWTManager(app)

@jwt.token_in_blocklist_loader
def check_token_blocklist(jwt_header, jwt_payload) -> bool:
    tokenBlocked = TokenBlockedList.query.filter_by(
        jti=jwt_payload["jti"]).first()
    if not isinstance(tokenBlocked, TokenBlockedList):
        if jwt_payload["type"] == "password" and request.path != "/api/changepassword":
            return True
    else :
        return True

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)

#MERCADOPAGO
sdk = mercadopago.SDK("TEST-3202916836419989-081921-46f9371b324e6adf7f3858468454df2d-1274738706")

@app.route('/createPreference', methods=['POST'])
def create_preference():
    try:
        req_data = request.get_json()

        preference_data = {
            "items": [
                {
                    "title": req_data["description"],
                    "unit_price": float(req_data["price"]),
                    "quantity": int(req_data["quantity"]),
                }
            ],
            "back_urls": {
                "success": "http://localhost:3000/",
                "failure": "http://localhost:3000/",
                "pending": "",
            },
            "auto_return": "approved",
        }

        preference_response = sdk.preference().create(preference_data)
        preference_id = preference_response["response"]["id"]

        return jsonify({"id": preference_id})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

    