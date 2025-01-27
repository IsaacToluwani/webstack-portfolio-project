import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We are a leading e-commerce platform providing a wide range of products to our customers.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/mouse">Mouse</a></li>
            <li><a href="/headphone">Headphone </a></li>
            <li><a href="/radio">Radio </a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-commerce Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;