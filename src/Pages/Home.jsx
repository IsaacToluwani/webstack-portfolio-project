import React from 'react';
import TrendingItem from '../Components/TrendingItem/TrendingItem';
import Hero from '../Components/Hero/Hero';

function home() {
  return (
    <div className='home'>
      <Hero />
      <TrendingItem />
    </div>
  );
}

export default home;
