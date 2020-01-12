import React from 'react';

const LanguageButton = ({ dispatch, flag, type }) => {
  const buttonStyles = {
    backgroundImage: `url(${flag})`,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none'
  };

  return (
    <button
      onClick={e => {
        dispatch({ type: type });
      }}
      className='waves-effect waves-light btn languages-flag'
      style={buttonStyles}
    ></button>
  );
};

export default LanguageButton;
