import React from "react";
import Card from "./card"; 

function Cards({ cardData }) {
    return (
        <div className="container d-flex justify-content-center h-100">
            <div className="row">
                {cardData.map(card => (
                    <div key={card.id} className="col-md-4 mb-4">
                        <Card title={card.title} description={card.description} price={card.price} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
