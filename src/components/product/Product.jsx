import React ,{ useState, useContext } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Context } from "../../front/js/store/appContext.js"

const Product = ({ id, title, description, price, imageSource }) => {
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
    <div>
      <div>
        <div className='card m-4 border border-warning border-5 rounded'>
          <img src={imageSource} alt='product stuff' />
          <h2>{title}</h2>
          <h4>${price}</h4>
          <h4>{description}</h4>
          <button className='btn btn-outline-secondary rounded' onClick={handleBuy}>Comprar con MercadoPago</button>
          {preferenceIdLocal && (
            <Wallet initialization={{ preferenceId: store.preferenceId.id }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;