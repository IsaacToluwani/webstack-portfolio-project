import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import Item from '../Components/Item/Item';
//import all_product from '../Assets/all_product';

function StoreCategory(props) {
  const { all_product } = useContext(StoreContext);
  if (!all_product) {
    return <h1>product not found</h1>;
  }

  return (
    <div className='store-category'>
      {all_product.map((product, i) => {
        if (props.category === product.category) {
          return <Item name={product.name} image={product.image} />;
        }
      }
    
    </div>

}    
    



export default StoreCategory;
