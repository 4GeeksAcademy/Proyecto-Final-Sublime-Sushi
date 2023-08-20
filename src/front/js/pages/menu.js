import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/sushi.jpg";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";

export const Menu = () => {

        const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-3">
			<div className="row">

				<div className="col">
					<div className="row m-5">
						<img className="col w-50" src={rigoImageUrl}/>
                        <p className="col form-text text-muted">Aqui supuestamente va un plato..</p>
					</div>
				</div>

				<div className="col">
					<div className="row m-5">
						<img className="col w-50" src={rigoImageUrl}/>
                        <p className="col form-text text-muted">Aqui supuestamente va un plato..</p>
					</div>
				</div>
			
			    <div className="col">
					<div className="row m-5">
						<img className="col w-50" src={rigoImageUrl}/>
                        <p className="col form-text text-muted">Aqui supuestamente va un plato..</p>
					</div>
				</div>

				<div className="col">
					<div className="row m-5">
						<img className="col w-50" src={rigoImageUrl}/>
                        <p className="col form-text text-muted">Aqui supuestamente va un plato..</p>
					</div>
				</div>

			</div>

			<div className="row">

				<div className="col">
					<div className="row m-5">
						<img className="col w-50" src={rigoImageUrl}/>
                        <p className="col form-text text-muted">Aqui supuestamente va un plato..</p>
					</div>
				</div>

				<div className="col">
					<div className="row m-5">
						<img className="col w-50" src={rigoImageUrl}/>
                        <p className="col form-text text-muted">Aqui supuestamente va un plato..</p>
					</div>
				</div>
			
			    <div className="col">
					<div className="row m-5">
						<img className="col w-50" src={rigoImageUrl}/>
                        <p className="col form-text text-muted">Aqui supuestamente va un plato..</p>
					</div>
				</div>

				<div className="col">
					<div className="row m-5">
						<img className="col w-50" src={rigoImageUrl}/>
                        <p className="col form-text text-muted">Aqui supuestamente va un plato..</p>
					</div>
				</div>

			</div>
			
		</div>
    );
};