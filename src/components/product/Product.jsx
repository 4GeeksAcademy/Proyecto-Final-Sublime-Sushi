import React ,{ useState, useContext } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Context } from "../js/store/appContext.js"



const Product = () => {

    const [ preferenceIdLocal , setPreferenceIdLocal ] = useState(null)
    const { store, actions } = useContext(Context)
    initMercadoPago('TEST-0c54ffc1-d83f-453f-a0f5-8c2b7fb49c7d');

    const handleBuy = async () => {
        const id = await actions.createPreference()
        if(id){
            setPreferenceIdLocal(store.preferenceId)
        };
    };

    return (
        <div>
            <div>
                <div>
                    <img src='' alt='product stuff' />
                    <h3>Titulo producto</h3>
                    <p>$100</p>
                    <button onClick={handleBuy} >Comprar con MercadoPago</button>
                    {
                        preferenceIdLocal && <Wallet initialization={{ preferenceId: store.preferenceId.id }} />
                    }
                </div>
            </div>
        </div>  
    );
};

export default Product