import React from 'react';
import TrendingItem from '../Components/TrendingItem/TrendingItem';
import Hero from '../Components/Hero/Hero';
import Category from '../Components/Category/Category';

function home() {
  return (
    <div className='home'>
      <Hero />
      <Category />
      <TrendingItem />

    </div>
  );
}

export default home;
