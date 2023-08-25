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
        console.log("Signup exitoso");

        navigate("/");
    }

    return (
        <div className="container-login text-center">
            <h1>Registrate</h1>
            <form onSubmit={submitForm}>
                <div >
                    <label htmlFor="exampleInputFirstName" className="form-label">Name</label>
                    <input type="text" className="form-control" name="first_name" id="exampleInputFirstName" />
                </div>
                <div >
                    <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="last_name" id="exampleInputLastName" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                    <input type="number" className="form-control" name="Phone" id="examplePhone1" aria-describedby="emailHelp" placeholder="Phone number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mt-2">Signup</button>
                </div>
                <div>
                    <button onClick={() => navigate("/login")} className="btn btn-primary mt-2">Volver a Login</button>
                </div>
            </form>
        </div>
    );
};