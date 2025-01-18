import React from 'react';
import './Item.css';

function Item(props) {
  return (
    <div className='item'>
      <img src={props.image} alt='' className='item-image' />
      <p>{props.name}</p>
      <div className=''>
        <p className='new-price'>${props.new_price} </p>
        <p className='old-price'>${props.old_price} </p>
      </div>
    </div>
  );
}

export default Item;
