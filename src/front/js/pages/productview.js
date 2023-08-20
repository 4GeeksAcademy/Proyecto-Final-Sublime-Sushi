import Product from "../../../components/product/Product";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/sushi.jpg";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";

export const Product = () => {

        const { store, actions } = useContext(Context);

	return (
		<div className="">
			<Product/>
		</div>
    );
};