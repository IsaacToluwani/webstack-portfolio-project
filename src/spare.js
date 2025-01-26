// import React, { useContext } from 'react';
// import { StoreContext } from '../../Context/StoreContext';

// const CartDetails = () => {
//   const { cartItems, all_product } = useContext(StoreContext);
//   console.log(cartItems, all_product);
  

//   return (
//     <div>
//       <div className='cart-header'>
//         <p>Product</p>
//         <p>Quantity</p>
//         <p>Total</p>
//       </div>
//       <hr />
//       <div>
//         {all_product.map((product) => {
//           if (cartItems[product.id] > 0) {
//             return (
//               <div key={product.id} className='cart-style'>
//                 <img src={product.image} alt={product.name} />
//                 <p>{product.name}</p>
//                 <p>{cartItems[product.id]}</p>
//                 <p>${product.price * cartItems[product.id]}</p>
//               </div>
//             );
//           }
//           return <h1>error</h1>;
//         })}
//       </div>
//     </div>
//   );
// };

// export default CartDetails;









// import React, { createContext, useState } from 'react';
// import all_product from '../Assets/all_product';

// const StoreContext = createContext(null);

// const defaultCart = () => {
//   const cart = {};
//   for (let index = 0; index < all_product.length; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };
// console.log('cart:', defaultCart());

// const StoreProvider = (props) => {
//   const [cartItems, setCartItems] = useState(defaultCart);

//   const addItemToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     console.log('addtoCart:', cartItems);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const ContextValue = {
//     all_product,
//     cartItems,
//     addItemToCart,
//     removeFromCart,
//   };
//   console.log(props.children);

//   return (
//     <StoreContext.Provider value={ContextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export { StoreContext, StoreProvider };
