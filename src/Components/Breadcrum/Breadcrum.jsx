import React from 'react';
import './Breadcrum.css';
import arrow from '../../Assets/arrow1.png';
import { Link } from 'react-router-dom';

function Breadcrum({ item }) {
  return (
    <div className='breadcrum'>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <img src={arrow} alt='arrow' />
      <Link to = {`/${item.category}`}>
      <p>{item.category}</p>
      </Link>
      <img src={arrow} alt='arrow' />
      <p>{item.name}</p>
    </div>
  );
}

export default Breadcrum;
