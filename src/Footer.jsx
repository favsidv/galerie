import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-logo">GALERIE</h3>
          <p>The new era of art investing.</p>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Navigate</h4>
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">How It Works</a>
          <a href="#" className="footer-link">FAQ</a>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Ecosystem</h4>
          <a href="https://flow.com/" target="_blank" className="footer-link">Flow</a>
          <a href="https://www.privy.io/" target="_blank" className="footer-link">Privy</a>
          <a href="https://ethglobal.com/" target="_blank" className="footer-link">ETHGlobal</a>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GALERIE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 