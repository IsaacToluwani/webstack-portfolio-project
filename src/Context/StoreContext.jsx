import React, { createContext } from 'react';
import all_product from '../Assets/all_product';

const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const ContextValue = { all_product };
  console.log(props.children);

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
