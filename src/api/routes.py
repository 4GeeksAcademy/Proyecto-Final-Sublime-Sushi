"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Platos, Pedidos, DetalleDePedidos, TokenBlockedList
from api.utils import generate_sitemap, APIException
from api.sendmail import sendMail, recoveryPasswordTemplate
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity, get_jwt, get_jti
import json

api = Blueprint('api', __name__)
app = Flask(__name__)
bcrypt = Bcrypt(app)

@api.route("/signup", methods=["POST"])
def user_create():
    data = request.get_json()
    print(data)
    new_user = User.query.filter_by(email=data["email"]).first()
    if (new_user is not None):
        return jsonify({
            "msg": "Email registrado"
        }), 400
    secure_password = bcrypt.generate_password_hash(
        data["password"], rounds=None).decode("utf-8")
    new_user = User(email=data["email"],
                    password=secure_password,
                    first_name=data["first_name"],
                    last_name=data["last_name"],
                    phone=data["phone"],
                    is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

@api.route("/login", methods=["POST"])
def user_login():
    user_email = request.json.get("email")
    user_password = request.json.get("password")
    # Buscar al usuario por el correo
    user = User.query.filter_by(email=user_email).first()
    if user is None:
        return jsonify({"message": "User no found"}), 401
    
    # Verificar la clave
    if not bcrypt.check_password_hash(user.password, user_password):
        return jsonify({"message": "Wrong password"}), 401
    # Generar el Token
    access_token = create_access_token(identity=user.id)
    access_jti=get_jti(access_token)
    refresh_token=create_refresh_token(identity=user.id, additional_claims={"accessToken":access_jti})
    # Retornar el Token
    return jsonify({"accessToken": access_token, "refreshToken":refresh_token})


@api.route("/changepassword", methods=["POST"])
@jwt_required()
def change_password():
    new_password = request.json.get("password")
    user_id = get_jwt_identity()
    secure_password = bcrypt.generate_password_hash(new_password, rounds=None).decode("utf-8")
    user = User.query.get(user_id)
    user.password = secure_password
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Clave actualizada"})

@api.route("/recoverypassword", methods=["POST"])
def recovery_password():
    user_email = request.json.get("email")
    user = User.query.filter_by(email=user_email).first()
    if user is None:
        return jsonify({"message": "user not found"}), 401
    # 1ro: Generar el token temporal para el cambio de clave
    access_token = create_access_token(
        identity=user.id, additional_claims={"type": "password"})
    # 2do: Enviar el token via email para el cambio de clave
    if recoveryPasswordTemplate(access_token,user_email):
        return jsonify({"msg": "Correo enviado"})
    else:
        return jsonify({"msg":"Correo no enviado"}),401
    

@api.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def user_refresh():
    #Identificadores de tokens viejos
    jti_refresh = get_jwt()["jti"]
    jti_access= get_jwt()["accessToken"]
    #Bloquear los tokens viejos
    accessRevoked=TokenBlockedList(jti=jti_access)
    refreshRevoked=TokenBlockedList(jti=jti_refresh)
    db.session.add(accessRevoked)
    db.session.add(refreshRevoked)
    db.session.commit()
    #Generar nuevos tokens
    user_id=get_jwt_identity()
    access_token = create_access_token(identity=user_id)
    access_jti=get_jti(access_token)
    refresh_token=create_refresh_token(identity=user_id, additional_claims={"accessToken":access_jti})
    # Retornar el token
    return jsonify({"accessToken": access_token, "refreshToken":refresh_token})

@api.route('/logout', methods=['POST'])
@jwt_required()
def user_logout():
    jwt = get_jwt()["jti"]
    tokenBlocked = TokenBlockedList(jti = jwt)
    db.session.add(tokenBlocked)
    db.session.commit()
    return jsonify({"message": "Token revoked"})

@api.route('/isAuth', methods=['GET'])
@jwt_required()
def is_Auth():
    user_id = get_jwt_identity()
    user= User.query.get(user_id)
    return jsonify({
        "user": user.serialize()
    }), 200

@api.route('/platos', methods=['GET'])
def get_platos():
    all_platos=Platos.query.all()
    if len(all_platos) < 1:
        return jsonify({"msg":"not found"}), 404
    serialized_platos = list(map(lambda item: item.serialize(), all_platos))

    return jsonify(serialized_platos), 200

@api.route("/platos", methods=["POST"])
def register_platos():
    name = request.json.get("name")
    url = request.json.get("url")
    price = request.json.get("price")
    description = request.json.get("description")
    new_platos = Platos(name=name, url=url, price=price, description=description)
    db.session.add(new_platos)
    db.session.commit()
    response = {"msg": "Plato creado exitosamente"}
    return jsonify(response), 200

@api.route("/pedidos", methods=["POST"])
@jwt_required()
def register_pedidos():
    body= json.loads(request.data)
    user_id = get_jwt_identity()
    new_pedidos = Pedidos(
        user_id=user_id, platos_id=body["platos_id"], fecha_del_pedido=body["fecha_del_pedido"]
    )
    db.session.add(new_pedidos)
    db.session.commit()
    response = {"msg": "Pedido creado exitosamente"}
    return jsonify(response), 200