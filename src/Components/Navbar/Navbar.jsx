import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../../Assets/betrack-high-resolution-logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import { StoreContext } from '../../Context/StoreContext';

function Navbar() {
  const { getTotalCartProducts } = useContext(StoreContext);

  return (
    <div className='nav'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
      </div>
      <div className='nav-menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='radio'>Radios</Link>
          </li>
          <li>
            <Link to='headphone'>Headphones</Link>
          </li>
          <li>
            <Link to='mouse'>Mouse</Link>
          </li>
        </ul>
      </div>
      <div className='header-cart'>
        <button className='btn btn:hover'>
          <Link to='/signin'>Login</Link>
        </button>
        <Link to='cart'>
          <img src={cart_icon} alt='' />
        </Link>
        <div className='nav-cart-count'>{getTotalCartProducts()}</div>
      </div>
    </div>
  );
}

export default Navbar;
