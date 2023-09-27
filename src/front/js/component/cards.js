import React from "react";
import Card from "./card";

function Cards({ cardData }) {
    if (!Array.isArray(cardData.data)) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container d-flex justify-content-center h-100">
            <div className="row">
                {cardData.data.map(card => (
                    <div key={card.plato_id} className="col-md-4 mb-4">
                        <Card title={card.name} description={card.description} price={card.price} id={card.plato_id} imageSource={card.image}  />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
