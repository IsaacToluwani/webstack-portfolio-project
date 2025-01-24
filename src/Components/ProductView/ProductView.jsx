import React from 'react';
import './ProductView.css';
import Item from '../Item/Item';
import StarRating from '../StarRating/StarRating';

function ProductView({ item }) {
  return (
    <main className='product-view'>
      <section className='product-view-left'>
        <div className='main-img'>
          <img src={item.image} alt='mouse' />
        </div>
        <div className='image-list'>
          <img src={item.image} alt='mouse' />
          <img src={item.image} alt='mouse' />
          <img src={item.image} alt='mouse' />
          <img src={item.image} alt='mouse' />
          <img src={item.image} alt='mouse' />
        </div>
      </section>
      <section className='product-view-right'>
        <h3>{item.name}</h3>
        <div className='product-rating'>
          <StarRating rating={item.rating} />
          <p>{item.ratingNo}</p>
          <span>Reviews</span>
        </div>
        <div className='product-pricing'>
          <div className=''>{item.new_price}</div>
          <div>${item.old_price}</div>
        </div>
        <div className="choose-size">
          <h4>Choose Sizes</h4>
          <button>S</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <div className="add-to-cart">
          <button>Add To Cart</button>
        </div>
      </section>
    </main>
  );
}

export default ProductView;
