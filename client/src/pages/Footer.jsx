// Footer.jsx

import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footerTitle">Why Choose Us?</h3>
          <ul className="features">
            <li>Fast Shipping</li>
            <li>Quality Products</li>
            <li>24/7 Customer Support</li>
            <li>Easy Returns</li>
            <li>Secure Payment Methods</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footerTitle">Contact Us</h3>
          <p>Email: meowMarket@gmail.com</p>
          <p>Phone: +1-123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3 className="footerTitle">Follow Us</h3>
          <p>Stay connected via social media:</p>
          <div className="social-icons">
            {/* Add social media icons or links here */}
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Meow Market. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
