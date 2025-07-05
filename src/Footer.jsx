import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-logo">Galerie</h3>
          <p>The new era of art investing.</p>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Navigate</h4>
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">Gallery</a>
          <a href="#" className="footer-link">About</a>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Support</h4>
          <a href="#" className="footer-link">FAQ</a>
          <a href="#" className="footer-link">Contact Us</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Join Our Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" className="newsletter-input" />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Galerie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 