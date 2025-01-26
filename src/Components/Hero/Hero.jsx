import React from 'react';
import './Hero.css';
import mouse from '../../Assets/product_5.png';

function Hero() {
  return (
    <div className='hero'>
      
      <div className='hero-left'>
      <h4>Your One Stop Location</h4>
        <h1>Get The Best Electronics</h1>
        <button className='btn'>Visit Shop</button>
      </div>
      <div className='hero-img'>
        <img src={mouse} alt='' />
      </div>
    </div>
  );
}

export default Hero;
