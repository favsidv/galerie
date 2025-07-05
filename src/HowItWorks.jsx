import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description: 'Sign up in seconds using your Google account or email. It is that simple to get started.'
    },
    {
      number: '02',
      title: 'Fund Your Wallet',
      description: 'Easily add funds to your account. We support various on-ramping solutions for a seamless experience.'
    },
    {
      number: '03',
      title: 'Explore the Gallery',
      description: 'Browse our curated collection of iconic artworks, each with detailed information and history.'
    },
    {
      number: '04',
      title: 'Acquire Your Share',
      description: 'Invest in the art you love by purchasing fractional shares, making fine art accessible to everyone.'
    },
    {
      number: '05',
      title: 'Track Your Collection',
      description: 'Monitor the performance of your art investments directly from your dashboard and watch your collection grow.'
    },
    {
      number: '06',
      title: 'Build Your Legacy',
      description: 'Receive potential returns, trade your shares on our secondary market, or simply enjoy owning a piece of history.'
    }
  ];

  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <span className="step-number">{step.number}</span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks; 