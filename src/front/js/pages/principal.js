import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import IMG1 from "../../img/IMG01.jpg";
import IMG2 from "../../img/IMG-02.jpg";
import IMG3 from "../../img/IMG-03.jpg";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";

export const Principal = () => {

        const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-3">
			<div className="row mt-2">
				<div className="col">
					<p>
						<img className="w-50 rounded-3 border border-5 border-success" src={IMG1}/>
					</p>
				</div>
				<div className="col text-start fw-bold fs-1">
					<p className="mt-5">CUIDADO: Todo en este sitio puede verse delicioso y puede provocarte un ataque de hambre</p>
					<Link to="/menu">
						<button className="btn btn-success navbar-brand text-white mb-0 h1">Pedir</button>
					</Link>
				</div>
			</div>
			<div className="row mt-2">
			<div className="col text-center fw-bold fs-1">
					<p className="mt-5">Te apetece probar uno de los MEJORES SUSHI de Malvin</p>
					<Link to="/menu">
						<button className="btn btn-warning navbar-brand text-white mb-0 h1">YENDOO!!!</button>
					</Link>
				</div>
				<div className="col">
					<p>
						<img className="w-50 border border-5 border-warning" src={IMG2}/>
					</p>
				</div>
			</div>
			<div className="row mt-2">
				<div className="col">
					<p>
						<img className="w-50 rounded-circle border border-5 border-info" src={IMG3}/>
					</p>
				</div>
				<div className="col text-start fw-bold fs-1">
					<p className="mt-5">Te contamos un poco sobre nosotros, y de nuestra ideología</p>
					<Link to="/sobreNosotros">
						<button className="btn btn-info navbar-brand text-white mb-0 h1">Conocenos</button>
					</Link>
				</div>
			</div>
		</div>
    );
};