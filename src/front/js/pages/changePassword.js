import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useSearchParams } from "react-router-dom";

export const ChangePassword = () => {
	const { store, actions } = useContext(Context);
    let [searchParams, setSearchParams] = useSearchParams();

    async function submitForm(e){
        e.preventDefault()
        let data = new FormData(e.target)
        if(data.get("password")!==data.get("passwordConfirm")){
            console.log("Claves no Coinciden")
            return
        }
        let tokenPassword=searchParams.get("token")
        let resp = await actions.changePasswordRecovery(tokenPassword, data.get("password"))
        if (resp >= 400){
            return
        }
        console.log("Clave Cambiada")
    }

    return (
        <div className="container-login text-center mt-5">
            <h1>Cambiar contraseña</h1>
            <form onSubmit={submitForm}>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password"/>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password Confirm</label>
                    <input type="password" className="form-control" name="passwordConfirm" id="passwordConfirm" placeholder="Password Confirm"/>
                </div>
                <button type="submit" className="btn btn-primary mt-1">Confirmar</button>
            </form>
        </div>
	);
};