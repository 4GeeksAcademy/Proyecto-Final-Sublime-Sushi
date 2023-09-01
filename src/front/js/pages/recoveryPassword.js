import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const RecoveryPassword = () => {
	const { store, actions } = useContext(Context);
	async function submitForm(e){
        e.preventDefault()
        let data = new FormData(e.target)
        let resp = await actions.requestPasswordRecovery(data.get("email"))
        if (resp>=400){
            return 
        }
        console.log("Login exitoso")
    }

	return (
		<div className="container-login text-center mt-5">
			<h1 className="card-header main-title">Recuperemos tu contraseña</h1>
			<div className="card gradient-custom-contrast mt-5">
				<div className="card-body">
					<form onSubmit = {submitForm}>
						<div className="mb-3 card-title">
							<label htmlFor="exampleInputEmail" className="form-label mt-2">Email address</label>
							<input type="email" className="form-control" name="email" id="exampleInputEmail" aria-describedby="emailHelp"/>
							<div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
						</div>
						<button type="submit" className="btn btn-primary">Recuperar Contraseña</button>
					</form>
				</div>
			</div>			
		</div>
	);
};