import React, { createContext, useState } from 'react';
import all_product from '../Assets/all_product';

export const StoreContext = createContext(null);

const defaultCart = () => {
  const cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0;
  }
  return cart;
};

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCart);

  const addItemToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const ContextValue = { all_product, cartItems, addItemToCart, removeFromCart };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};