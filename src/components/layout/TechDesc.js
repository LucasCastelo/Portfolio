import React from 'react';

const TechDesc = props => {
  const questStyles = {
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: '100',
    fontSize: '1.5vw',
    marginBottom: '0',
    marginTop: '20px',
    color: '#DA2530'
  };
  const descStyles = {
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: '400',
    fontSize: '1.8vw',
    margin: '0',
    marginBottom: '20px',
    color: 'white'
  };

  const titleStyle = {
    color: 'white',
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: '100'
  };

  const { learn, ready, status } = props.questions;
  const { descIndex, tecs } = props;

  return (
    <div className='col l6 m6 s12 center-align'>
      <h2 style={titleStyle}>{tecs[descIndex].name}</h2>
      <h3 style={questStyles}>{learn}</h3>
      <p style={descStyles}>{tecs[descIndex].learn}</p>
      <h3 style={questStyles}>{ready}</h3>
      <p style={descStyles}>{tecs[descIndex].ready}</p>
      <h3 style={questStyles}>{status}</h3>
      <p style={descStyles}>{tecs[descIndex].status}</p>
    </div>
  );
};

export default TechDesc;
