import React, { createContext, useState } from 'react';
import all_product from '../Assets/all_product';

const StoreContext = createContext(null);

const defaultCart = () => {
  const cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  

  console.log(defaultCart());

  const ContextValue = { all_product, cartItems };
  console.log(props.children);

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
