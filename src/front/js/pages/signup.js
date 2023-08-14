import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Home } from "./home";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    async function submitForm(e) {
        e.preventDefault()
        let data = new FormData(e.target)
        let resp = await actions.userSignup(
            data.get("email"), data.get("password"),
            data.get("first_name"), data.get("last_name"), false
        )
        if(resp >= 400){
            return
        }
        console.log("Signup exitoso")

        return (
            <div className="text-center mt-5">
                <h1>Inicie Sesion</h1>
                <form onSubmit={submitForm}>
                    <div>
                        <label htmlFor="exampleInputFirstName" className="form-label">Nombre</label>
					    <input type="text" className="form-control" name="first_name" id="exampleInputFirstName" />
                    </div>
                    <div>
                        <label htmlFor="exampleInputLastName" className="form-label">Apellido</label>
					    <input type="text" className="form-control" name="last_name" id="exampleInputLastName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                    </div>
                    <div>
                    <button onClick={Home} className="btn btn-primary">Volver a Login</button>
                    </div>
                </form>
            </div>
        );
    }
};