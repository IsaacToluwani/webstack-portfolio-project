import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import Item from '../Components/Item/Item';
//import { useParams } from 'react-router-dom';
//import all_product from '../Assets/all_product';

function StoreCategory(props) {
  const { all_product } = useContext(StoreContext);

  if (!all_product) {
    return <h1> product not found</h1>;
  }

  return (
    <div className='store-category'>
     

      {all_product.map((product, i) => {
        if (props.category === product.category) {
          return (
            <Item
          id={product.id}
          key={i}
          image={product.image}
          name={product.name}
          new_price={product.new_price}
          old_price={product.old_price}
          category={product.category}
        />
          )
        }
      }
      )}
    </div>
  );
}
export default StoreCategory;
