import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useSearchParams } from "react-router-dom";

 
export const Profile = () => {
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
    return(
        
        <div className="row m-5">
            <div className="col">
                <div className="row m-5">
                    <h1 className="col">Mis Datos</h1>
                    <div className="profileRow">
                        <div className="profileRowLabel">Name</div>
                        <input type="text" className="form-control" name="first_name" id="exampleInputFirstName" value=""></input>
                    </div>
                    <div className="profileRow">
                        <div className="profileRowLabel">Last Name</div>
                        <input type="text" className="form-control" name="last_name" id="exampleInputLastName " value=""></input>
                    </div>
                    <div className="profileRow">
                        <div className="profileRowLabel">Email</div>
                        <input type="text" className="form-control" name="email" id="exampleInputEmail" value=""></input>
                    </div>
                    <div className="profileRow">
                        <div className="profileRowLabel">Phone</div>
                        <input type="number" className="form-control" name="telefono" id="exampleInputPhone" value=""></input>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Guardar</button>
                        
                </div>
            </div>

                
            <div className="col mt-5">
                <form onSubmit={submitForm}>
                    <h1 className="col">Cambiar contraseña</h1>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password Confirm</label>
                        <input type="password" className="form-control" name="passwordConfirm" id="passwordConfirm" placeholder="Password Confirm"/>
                    </div>
                    <button type="submit" className="btn btn-primary form-group m-3">Confirmar</button>
                </form>
            </div>
                
        </div>
        
    )
};