import React, { useContext } from 'react';
import BrazilFlag from '../../assets/images/brazil.png';
import UKFlag from '../../assets/images/united-kingdom.png';
import GermanFlag from '../../assets/images/germany.png';
import { LanguagesContext } from '../../contexts/Languages';
import LanguageButton from './LanguageButton';

const LanguageSelector = () => {
  const { dispatch } = useContext(LanguagesContext);

  //STYLES AND CLASSES ---------------------

  const parentStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0'
  };

  //---------------------------------------
  return (
    <div className='row' style={parentStyles}>
      <div className='col s12 center-align' style={{ textAlign: 'center' }}>
        <LanguageButton
          dispatch={dispatch}
          flag={BrazilFlag}
          type='PT'
        ></LanguageButton>
        <LanguageButton
          dispatch={dispatch}
          flag={UKFlag}
          type='EN'
        ></LanguageButton>
        <LanguageButton
          dispatch={dispatch}
          flag={GermanFlag}
          type='GR'
        ></LanguageButton>
      </div>
    </div>
  );
};

export default LanguageSelector;
