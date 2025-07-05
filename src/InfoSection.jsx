import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-text">
        <p>
          A novel space for artists & collectors to invest in fractional ownership of real-world art.
        </p>
      </div>
      <div className="frames-wrapper">
        <div className="frame" style={{ backgroundColor: '#D8D8D8' }}></div>
        <div className="frame" style={{ backgroundColor: '#C0C0C0' }}></div>
        <div className="frame" style={{ backgroundColor: '#A8A8A8' }}></div>
      </div>
    </div>
  );
};

export default InfoSection; 