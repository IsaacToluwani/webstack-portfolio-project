import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import Item from '../Components/Item/Item';

function Product() {
  const { productId } = useParams();
  const { all_product } = useContext(StoreContext);

  // const product = ;
  console.log('productId: ', productId);

  return (
    <div>
      {all_product.map((product, i) => {
        if (Number (productId) === product.id) {
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
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Product;
