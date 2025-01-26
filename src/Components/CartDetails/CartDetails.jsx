import React, { useContext } from 'react';
import './CartDetails.css'
import { StoreContext } from '../../Context/StoreContext';

const CartDetails = () => {
  const { cartItems, all_product } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className='cart-header'>
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />
      <div>
        {all_product.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div key={product.id} className='cart-style'>
                <img src={product.image} alt={product.name} className='cart-product-icon' />
                <p>{product.name}</p>
                <p>${product.new_price} </p>
                <p>{cartItems[product.id]}</p>
                <p>${product.new_price * cartItems[product.id]}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default CartDetails;
