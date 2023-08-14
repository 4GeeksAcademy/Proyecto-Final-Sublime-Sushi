import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/sushi.jpg";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";

export const SobreNosotros = () => {

        const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-3">
			<div className="row">
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
                        <small className="form-text text-muted">Aqui supuestamente va un plato..</small>
					</p>
				</div>
				<div className="col">
                    <p>
						<img className="w-50" src={rigoImageUrl}/>
                        <small className="form-text text-muted">Aqui supuestamente va un plato..</small>
					</p>
				</div>
			</div>
			<div className="row">
			    <div className="col">
                    <p>
						<img className="w-50" src={rigoImageUrl}/>
                        <small className="form-text text-muted">Aqui supuestamente va un plato..</small>
					</p>
				</div>
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
                        <small className="form-text text-muted">Aqui supuestamente va un plato..</small>
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
                        <small className="form-text text-muted">Aqui supuestamente va un plato..</small>
					</p>
				</div>
				<div className="col">
                    <p>
						<img className="w-50" src={rigoImageUrl}/>
                        <small className="form-text text-muted">Aqui supuestamente va un plato..</small>
					</p>
				</div>
			</div>
            <div className="row">
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
                        <small className="form-text text-muted">Aqui supuestamente va un plato..</small>
					</p>
				</div>
				<div className="col">
                    <p>
						<img className="w-50" src={rigoImageUrl}/>
                        <small className="form-text text-muted">Aqui supuestamente va un plato..</small>
					</p>
				</div>
			</div>
		</div>
    );
};