import React, { useContext } from "react";
import { Context } from "../store/appContext";
import IMG5 from "../../img/IMG-5.jpg";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";

export const SobreNosotros = () => {

        const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-3">
			<div className="row">
				<div className="col">
					<div className="text-center">
						<h1 className="display-6">Sublime Montevideo surge de la idea de brindar comida de calidad, con sabores novedosos, respetando la materia prima en todos su proceso. Con mas de 10 años en la gastronimia Uruguaya y dentro del sushi, queremos cambiar la manera de trabajar. Mostrar fotos reales, sabores unicos y sobre todo brindando la seguridad a nuestros clientes de que lo que comen, fue elaborado de la mejor manera y dando lo mejor de nosotros para que vivan una experiencia totalmente </h1>
						<h1 className="display-6"><strong>SUBLIME...</strong></h1>
					</div>
				</div>
				<div className="col mt-5">
					<img className="img-fluid" src={IMG5}/>
				</div>
			</div>
		</div>
    );
};