import React, { useContext } from 'react';
import './CartDetails.css';
import { StoreContext } from '../../Context/StoreContext';

const CartDetails = () => {
  const { cartItems, all_product, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className='cart-header'>
        <p>Item</p>
    <p></p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />

      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div className='cart-style' >
              <div key={product.id} className='cart-item'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='cart-product-icon'
                />
                <p>{product.name}</p>
                <p>${product.new_price} </p>
                <p>{cartItems[product.id]}</p>
                <p>${product.new_price * cartItems[product.id]}</p>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cart-sidebar">
        <div className="cart-summary">
          <h3>Summary</h3>
          <div>
            <div className="cart-subtotal">
              <p>Subtotal</p>
              <p>${ getTotalCartAmount() }</p>
            </div>
            <hr />
            <div className="cart-subtotal shipping">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-total">
              <h4>Order Total</h4>
              <h4>${getTotalCartAmount()}</h4>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartDetails;
