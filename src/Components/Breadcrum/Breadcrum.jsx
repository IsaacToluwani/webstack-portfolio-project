import React from 'react';
import './Breadcrum.css';
import arrow from '../../Assets/arrow1.png';

function Breadcrum({ item }) {
  return (
    <div className='breadcrum'>
      <p>Home</p>
      <img src={arrow} alt='arrow' />
      <p>{item.category}</p>
      <img src={arrow} alt='arrow' />
      <p>{item.name}</p>
    </div>
  );
}

export default Breadcrum;
