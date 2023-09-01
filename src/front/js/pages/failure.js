import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Failure = () => {
    return(
        <div>
            <div className="container-login m-5 bg-danger text-white">
                <h1 className="text-center">¡OPPPSSS! ALgo ha salido mal</h1>
                <h3 className="text-center">Para saber mas sobre que pudo haber pasado o si la pagina no te esta dejando realizar tu pedido te pedimos comunicarte con nosotros al 095014724</h3>
                <p className="text-center">¡MUCHAS GRACIAS POR TU ATENCION!</p>
                <Link to="/menu">
						<button className="btn btn-warning navbar-brand text-white mb-0 h1">Volver al Menu</button>
				</Link>
            </div>
        </div>
    )
}