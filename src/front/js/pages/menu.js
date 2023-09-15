import React, { useContext, useEffect, useState } from "react";
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
        
    const [cardData, setCardData]=useState([])
    useEffect(() => {
        const getAllPlatos = async () => {
            try{
                const response = await actions.getAllPlatos();
                setCardData(response);
                console.log("Data set in cardData:", response);
            }catch (error) {
                console.error("Error loading platos from backend", error);
            }
        };
        
        getAllPlatos()
    }, [])
    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-3">Menú</h1>
                <Cards cardData={cardData} />
            </div>
        </div>
    );
};
