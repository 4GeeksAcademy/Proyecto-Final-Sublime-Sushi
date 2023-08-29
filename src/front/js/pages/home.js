import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/sushi.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";

export const Home = () => {
        const { store, actions } = useContext(Context);
        const navigate = useNavigate();
        
        async function submitForm(e){
            e.preventDefault()
            let data = new FormData(e.target)
            let resp = await actions.userLogin(data.get("email"), data.get("password"))
            if (resp >= 400) {
                return
            }
            navigate('/principal', { replace: true })
            console.log("Login Exitoso")
        }
    
        function signup(){
            navigate("/api/signup");
        }
    
        function recoveryPassword(){
            navigate("/api/recovery")
        }
    
        return (
            <div className="container-login text-center">
                <h1>Inicie Sesion</h1>
                <form onSubmit={submitForm}>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="row mt-1">
                        <button type="submit" className="col btn btn-primary">Login</button>
                    </div>
                    <div className="row mt-1">
                        <button onClick={recoveryPassword} className="col btn btn-primary">Recuperar Contraseña</button>
                    </div>
                    <div className="row mt-1">
                        <button onClick={signup} className="col btn btn-primary" type="button">Registrarse</button>
                    </div>
                </form>
            </div>
        );
    };