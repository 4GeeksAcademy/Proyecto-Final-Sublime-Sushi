import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import Cards from "../component/cards"; 
import { useNavigate } from "react-router-dom";
import image1 from "../../img/New-York.jpg"
import image2 from "../../img/California.jpg"
import image3 from "../../img/Smoked.jpg"
import image4 from "../../img/New-York-Panko.jpg"
import image5 from "../../img/New-Age.jpg"
import image6 from "../../img/Teriyaki-Roll.jpg"
import image7 from "../../img/GreenLand.jpg"
import image8 from "../../img/SushiPlace.jpg"
import image9 from "../../img/Ebi-Furai.jpg"

export const Menu = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const cardData = [
        {
            id: 1,
            title: "New York",
            description: "Uramaki de Salmon, Palta y Queso Philadelphia, Coronado con semillas de sésamo tostado",
            price: "430",
            image: image1
        },
        {
            id: 2,
            title: "California",
            description: "Uramaki de Langostinos, Palta y Queso Philadelphia, coronado con ciboulette",
            price: "430",
            image: image2
        },
        {
            id: 3,
            title: "Smoked",
            description: "Uramaki de Langostinos Panko, Queso Philadelphia, Coronado con Salmon ahumado",
            price: "450",
            image: image3
        },
        {
            id: 4,
            title: "New York Panko",
            description: "Uramaki de Salmon, Palta y Queso Philadelphia, envuelto en tempura y panko frito",
            price: "450",
            image: image4
        },
        {
            id: 5,
            title: "New Age",
            description: "Uramaki de Langostinos, Ciboulette tempura y Queso Philadelphia, en tempura y panko frito",
            price: "450",
            image: image5
        },
        {
            id: 6,
            title: "Teriyaki Roll",
            description: "Uramaki de Salmon Teriyaki, Palta y Queso Philadelphia, en tempura y panko frito",
            price: "450",
            image: image6
        },
        {
            id: 7,
            title: "GreenLand",
            description: "Maki de Salmon, Pepino y Ciboulette",
            price: "400",
            image: image7
        },
        {
            id: 8,
            title: "SushiPlace",
            description: "Maki de Salmon Skin, Mango, Ciboulette, Salmon Braseado. Coronado con Salmon Fresco Flameado",
            price: "450",
            image: image8
        },
        {
            id: 9,
            title: "Ebi Furai Roll",
            description: "Maki de Langostinos Panko, Queso Philadelphia y Ciboulette",
            price: "400",
            image: image9
        },
    ];

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-3">Menú</h1>
                <Cards cardData={cardData} />
            </div>
        </div>
    );
};
