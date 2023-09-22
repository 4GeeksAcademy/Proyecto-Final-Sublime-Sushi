import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function Card({ title, description, price, id, imageSource }) {
// function Card({ title, description, price, imageSource }) {
    const { store, actions } = useContext(Context);
    return (
        <div className="card m-4 border border border-5 border-warning">
            <img src={imageSource} alt={title} className="card-img-top" />
            {/* <img src={imageSource} alt={title} className="card-img-top" /> */}
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{description}</p>
                <p className="card-price text-secondary">${price}</p>
                <Link to="/view">
                    <button className="btn btn-outline-secondary rounded-0" onClick={() => actions.createNewOrder(id)}>Comprar</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
