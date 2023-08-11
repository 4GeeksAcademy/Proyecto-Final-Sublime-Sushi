import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/sushi.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const Home = () => {

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
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
	);
	/*const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-3">
			<div className="row">
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
					</p>
				</div>
				<div className="col text-start fw-bold fs-1">
					<p className="mt-5">CUIDADO: Todo en este sitio puede verse delicioso y puede provocarte un ataque de hambre</p>
				</div>
			</div>
			<div className="row">
			<div className="col text-start fw-bold fs-1">
					<p className="mt-5">Te apetece Probar uno de nuestros combinados de 120 piezas</p>
				</div>
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p>
						<img className="w-50" src={rigoImageUrl}/>
					</p>
				</div>
				<div className="col text-start fw-bold fs-1">
					<p className="mt-5">Te contamos un poco sobre nosotros</p>
				</div>
			</div>
		</div>
	);*/
};
