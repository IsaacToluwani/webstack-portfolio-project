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
console.log('cart:', defaultCart());

const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart);

  const addItemToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log('addtoCart:', cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

 

  const ContextValue = {
    all_product,
    cartItems,
    addItemToCart,
    removeFromCart,
  };
  console.log(props.children);

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
