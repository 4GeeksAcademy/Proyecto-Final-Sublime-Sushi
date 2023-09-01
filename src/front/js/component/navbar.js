import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	function logout(){
		actions.userLogout()
	}
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/principal">
					<span className="navbar-brand text-white mb-0 h1">Sublime Sushi</span>
				</Link>
				<Link to="/menu">
					<span className="navbar-brand text-white mb-0 h1">Menú</span>
				</Link>
				<Link to="/sobreNosotros">
					<span className="navbar-brand text-white mb-0 h1">Sobre Nosotros</span>
				</Link>
				{/*<Link to="/Profile">
					<span className="navbar-brand text-white mb-0 h1">Perfil</span>
				</Link>*/}
				{
					!!store.accessToken?
					<div className="ml-auto">
							<button onClick={logout} className="btn btn-primary">Logout</button>
					</div>
					:
					<div className="ml-auto">
						<Link to="/">
							<button className="btn btn-primary">Login</button>
						</Link>
					</div>

				}
			</div>
		</nav>
	);
};
