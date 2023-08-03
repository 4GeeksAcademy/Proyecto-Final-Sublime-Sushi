import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand text-white mb-0 h1">Sublime Sushi</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand text-white mb-0 h1" href="#">Menú</span>	
				</Link>	
				<Link to="/">		
					<span className="navbar-brand text-white mb-0 h1" href="#">Nosotros</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Iniciar Sesion</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
