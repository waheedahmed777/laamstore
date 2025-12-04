import './Footer.css';
// import { useState } from 'react';
export default function Footer() {
  // const [count, setcount] = useState(0);
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Logo & About */}
        <div className='footer-section'>
          <h2 className='footer-logo'>LAAM Store</h2>
          <p className='footer-text'>
            The best online store for quality products. Fast delivery, secure payments & 24/7
            support.
          </p>
        </div>

        {/* Shop */}
        <div className='footer-section'>
          <h3 className='footer-title'>Pages</h3>
          <ul className='footer-list'>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div className='footer-section'>
          <h3 className='footer-title'>Customer Support</h3>
          <ul className='footer-list'>
            <li>Track Order</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='footer-section'>
          <h3 className='footer-title'>Newsletter</h3>
          <p className='footer-text'>Subscribe for offers & updates.</p>

          <div className='newsletter-box'>
            <input type='email' placeholder='Enter your email' className='newsletter-input' />
            <button className='newsletter-btn'>Join</button>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        © {new Date().getFullYear()} LAAM Store — All Rights Reserved.
      </div>
    </footer>
  );
}
