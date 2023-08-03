import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/sushi.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-3">
			<div className="row">
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
					</p>
				</div>
				<div className="col text-start fw-bold fs-1">
					<p className="mt-5">CUIDADO: Todo en este sitio puede verse delicioso y puede provocarte un ataque de hambre</p>
				</div>
			</div>
			<div className="row">
			<div className="col text-start fw-bold fs-1">
					<p className="mt-5">Te apetece Provar uno de nuestros combinados de 120 piezas</p>
				</div>
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
					</p>
				</div>
				<div className="col text-start fw-bold fs-1">
					<p className="mt-5">Te contamos un poco sobre nosotros</p>
				</div>
			</div>
		</div>
	);
};
