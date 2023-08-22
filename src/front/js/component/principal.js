import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/sushi.jpg";
import { Navbar } from "./navbar";
import { useNavigate } from "react-router-dom";

export const Principal = () => {

        const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-3">
			<div className="row mt-2">
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
					</p>
				</div>
				<div className="col text-start fw-bold fs-1">
					<p className="mt-5">CUIDADO: Todo en este sitio puede verse delicioso y puede provocarte un ataque de hambre</p>
					<Link to="/menu">
						<button className="btn btn-primary navbar-brand text-white mb-0 h1">Pedir</button>
					</Link>
				</div>
			</div>
			<div className="row mt-2">
			<div className="col text-center fw-bold fs-1">
					<p className="mt-5">Te apetece probar uno de nuestros combinados de 120 piezas</p>
					<Link to="/menu">
						<button className="btn btn-primary navbar-brand text-white mb-0 h1">YENDOO!!!</button>
					</Link>
				</div>
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
					</p>
				</div>
			</div>
			<div className="row mt-2">
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
					</p>
				</div>
				<div className="col text-start fw-bold fs-1">
					<p className="mt-5">Te contamos un poco sobre nosotros, y de nuestra ideología</p>
					<Link to="/sobreNosotros">
						<button className="btn btn-primary navbar-brand text-white mb-0 h1">Conocenos</button>
					</Link>
				</div>
			</div>
		</div>
    );
};