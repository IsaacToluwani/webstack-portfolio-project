import React from 'react';
import trending_item from '../../Assets/trending_item';
import Item from '../Item/Item';

function TrendingItem() {
  return (
    <div className='trending-item'>
      <h2>Trending Item</h2>
      {trending_item.map((product, i) => (
        <Item
          id={product.id}
          key={i}
          image={product.image}
          name={product.name}
          new_price={product.new_price}
          old_price={product.old_price}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default TrendingItem;
