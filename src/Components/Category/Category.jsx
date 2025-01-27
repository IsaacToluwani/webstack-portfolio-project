import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import headphone from '../../Assets/product_2.png';
import mouse from '../../Assets/product_11.png';
import radio from '../../Assets/product_23.png';

function Category() {
  return (
    <div className='home-category'>

      <h2>Shop By Category</h2>
      <div className="home-category-all">
      <div className='categories mouse-category'>
        <Link to={`/mouse`}>
          <h4>Mouse</h4>
          <img src={mouse} alt='' className='category-image' />
        </Link>
        <div className=' category btn'>
          <button className='btn'> Shop Now</button>
        </div>
      </div>

      <div className='categories headphone-category'>
        <Link to={`/headphone`}>
          <h4>Headhone</h4>
          <img src={headphone} alt='' className='category-image' />
        </Link>
        <div className=' category btn'>
          <button className='btn'> Shop Now</button>
        </div>
      </div>

      <div className='categories radio-category'>
        <Link to={`/radio`}>
          <h4>Radio</h4>
          <img src={radio} alt='' className='category-image' />
        </Link>
        <div className=' category btn'>
          <button className='btn'> Shop Now</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Category;
