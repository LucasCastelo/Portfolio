import React from 'react';
import bg from '../../assets/images/bg-section-portfolio.jpg';

const Portfolio = () => {
  const mainStyle = {
    backgroundImage: `url(${bg})`,
    minHeight: '100vh',
    display: 'inline-block',
    minWidth: '100vw'
  };
  return (
    <div style={mainStyle}>
      <h3>AA</h3>
    </div>
  );
};

export default Portfolio;
