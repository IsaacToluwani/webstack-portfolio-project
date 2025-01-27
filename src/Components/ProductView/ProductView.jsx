import React, { useContext } from 'react';
import './ProductView.css';
import Item from '../Item/Item';
import { StoreContext } from '../../Context/StoreContext';
import StarRating from '../StarRating/StarRating';

function ProductView({ item }) {
  const { addItemToCart } = useContext(StoreContext);
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
          <div className="product-item-rating">

          <p>{item.ratingNo}</p>
          <p>Reviews</p>
          </div>
        </div>
        <div className='product-pricing'>
          <div className=''>{item.new_price}</div>
          <div className='product-old-price'>${item.old_price}</div>
        </div>
        <div className='choose-size'>
          <h4>Choose Sizes</h4>
          <div className="size-buttons">
          <button>S</button>
            
          <button>L</button>
          <button>XL</button>
          </div>
        </div>
        <div className='add-to-cart'>
          <button onClick={() => { addItemToCart(item.id) }}>Add To Cart</button>
        </div>
      </section>
    </main>
  );
}

export default ProductView;
