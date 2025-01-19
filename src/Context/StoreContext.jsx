import React, { createContext, useContext } from 'react';
import all_product from '../Assets/all_product';

const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const ContextValue = { all_product };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
