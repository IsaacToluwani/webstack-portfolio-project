import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt='' className='item-image' />
      </Link>
      
        <p>{props.name}</p>
      <div className=''>
        <p className='new-price'>${props.new_price} </p>
        <p className='old-price'>${props.old_price} </p>
      </div>
    </div>
  );
}

export default Item;
