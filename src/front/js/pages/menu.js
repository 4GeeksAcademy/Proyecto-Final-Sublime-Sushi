import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import Cards from "../component/cards"; 
import { useNavigate } from "react-router-dom";

export const Menu = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const cardData = [
        {
            id: 1,
            title: "New York",
            description: "Uramaki de Salmon, Palta y Queso Philadelphia, Coronado con semillas de sésamo tostado",
            price: "430"
        },
        {
            id: 2,
            title: "California",
            description: "Uramaki de Langostinos, Palta y Queso Philadelphia, coronado con ciboulette",
            price: "430"
        },
        {
            id: 3,
            title: "Smoked",
            description: "Uramaki de Langostinos Panko, Queso Philadelphia, Coronado con Salmon ahumado",
            price: "450"
        },
        {
            id: 4,
            title: "New York Panko",
            description: "Uramaki de Salmon, Palta y Queso Philadelphia, envuelto en tempura y panko frito",
            price: "450"
        },
        {
            id: 5,
            title: "New Age",
            description: "Uramaki de Langostinos, Ciboulette tempura y Queso Philadelphia, en tempura y panko frito",
            price: "450"
        },
        {
            id: 6,
            title: "Teriyaki Roll",
            description: "Uramaki de Salmon Teriyaki, Palta y Queso Philadelphia, en tempura y panko frito",
            price: "450"
        },
        {
            id: 7,
            title: "GreenLand",
            description: "Maki de Salmon, Pepino y Ciboulette",
            price: "400"
        },
        {
            id: 8,
            title: "SushiPlace",
            description: "Maki de Salmon Skin, Mango, Ciboulette, Salmon Braseado. Coronado con Salmon Fresco Flameado",
            price: "450"
        },
        {
            id: 9,
            title: "Ebi Furai Roll",
            description: "Maki de Langostinos Panko, Queso Philadelphia y Ciboulette",
            price: "400"
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
