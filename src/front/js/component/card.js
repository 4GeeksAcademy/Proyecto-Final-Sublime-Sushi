import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Context } from "../store/appContext";

function Card({ title, description, price, id, imageSource }) {
    
    const [preferenceIdLocal, setPreferenceIdLocal] = useState(null);
    const { store, actions } = useContext(Context);
    initMercadoPago('TEST-f4e25710-25f8-4918-80f1-c3e7301a04b8');
    const handleBuy = async () => {
        const id = await actions.createPreference();
        if (id) {
          setPreferenceIdLocal(store.preferenceId);
        }
      };
    
    return (
        <div className="card m-4 border border border-5 border-warning">
            <img src={imageSource} alt={title} className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{description}</p>
                <p className="card-price text-secondary">${price}</p>
                <button className="btn btn-outline-secondary rounded-0" onClick={() => { actions.createNewOrder(id); handleBuy(); }}>Comprar</button>
                {preferenceIdLocal && (
                    <Wallet initialization={{ preferenceId: store.preferenceId.id }} />
                )}

            </div>
        </div>
    );
}

export default Card;