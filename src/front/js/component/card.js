import React from "react";

function Card({ title, description, price }) {
    return (
        <div className="card m-4">
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{description}</p>
                <p className="card-price text-secondary">${price}</p>
                <button className="btn btn-outline-secondary rounded-0">Añadir al Carrito</button>
            </div>
        </div>
    );
}

export default Card;
