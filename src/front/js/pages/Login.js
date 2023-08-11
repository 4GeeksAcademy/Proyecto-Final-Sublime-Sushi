import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

    async function submitForm(e){
        e.preventDefault()
        let data = new FormData(e.target)
        let resp = await actions.userLogin(data.get("email"), data.get("password"))
        if (resp >= 400) {
            return
        }
        console.log("Login Exitoso")
    }

	return (
        <div className="text-center mt-5">
            <h1>Inicie Sesion</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="">Password</label>
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
	);
};