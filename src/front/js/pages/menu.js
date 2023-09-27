import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import Cards from "../component/cards"; 
import { useNavigate } from "react-router-dom";


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
