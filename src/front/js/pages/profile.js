import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useSearchParams } from "react-router-dom";

 
export const Profile = () => {
    const { store, actions } = useContext(Context);
    let [searchParams, setSearchParams] = useSearchParams();

    return(
        
        <div className="row m-5">
            <div className="col">
                <div className="row m-5">
                    <h1 className="col">Mis Datos</h1>
                    <div className="profileRow">
                        <div className="profileRowLabel">Name</div>
                        <input type="text" className="form-control" name="first_name" id="exampleInputFirstName" value=""></input>
                    </div>
                    <div className="profileRow">
                        <div className="profileRowLabel">Last Name</div>
                        <input type="text" className="form-control" name="last_name" id="exampleInputLastName " value=""></input>
                    </div>
                    <div className="profileRow">
                        <div className="profileRowLabel">Email</div>
                        <input type="text" className="form-control" name="email" id="exampleInputEmail" value=""></input>
                    </div>
                    <div className="profileRow">
                        <div className="profileRowLabel">Phone</div>
                        <input type="number" className="form-control" name="telefono" id="exampleInputPhone" value=""></input>
                    </div>
                        
                </div>
            </div>               
        </div>
        
    )
};