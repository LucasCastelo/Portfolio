import React, { useContext } from 'react';
import BrazilFlag from '../../assets/images/brazil.png';
import UKFlag from '../../assets/images/united-kingdom.png';
import GermanFlag from '../../assets/images/germany.png';
import { LanguagesContext } from '../../contexts/Languages';

const LanguageSelector = () => {
  const { dispatch } = useContext(LanguagesContext);

  //STYLES AND CLASSES ---------------------

  const imgStyles = {
    margin: '0',
    padding: '0',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%'
  };
  const buttonStyles = {
    padding: '0',
    margin: '0 10px',
    width: 'auto'
  };
  const buttonClasses = 'waves-effect waves-light btn col m1 offset-m6';

  const parentStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0'
  };

  //---------------------------------------
  return (
    <div className='row' style={parentStyles}>
      <button
        onClick={e => {
          e.preventDefault();
          dispatch({ type: 'PT' });
        }}
        className={buttonClasses}
        style={buttonStyles}
      >
        <img src={BrazilFlag} style={imgStyles} alt='Portugues'></img>
      </button>

      <button
        onClick={e => {
          e.preventDefault();
          dispatch({ type: 'EN' });
        }}
        className={buttonClasses}
        style={buttonStyles}
      >
        <img src={UKFlag} style={imgStyles} alt='English'></img>
      </button>

      <button
        onClick={e => {
          e.preventDefault();
          dispatch({ type: 'GR' });
        }}
        className={buttonClasses}
        style={buttonStyles}
      >
        <img src={GermanFlag} style={imgStyles} alt='Deutsch'></img>
      </button>
    </div>
  );
};

export default LanguageSelector;
