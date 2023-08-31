import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Success = () => {
    return(
        <div>
            <div className="container-login m-5 bg-success text-white">
                <h1 className="text-center">¡FELICIDADES! tu pedido ha sido confirmado y Aceptado</h1>
                <h3 className="text-center">Para saber el tiempo de demora y/o el coste del delivery te pedimos comunicarte con nosotros al 095014724</h3>
                <p className="text-center">¡MUCHAS GRACIAS POR TU COMPRA!</p>
                <Link to="/menu">
						<button className="btn btn-primary navbar-brand text-white mb-0 h1">Hacer otro Pedido</button>
				</Link>
            </div>
        </div>
    )
}