import React, { useContext } from 'react';
import bg from '../../assets/images/bg-section-intro.jpg';
import { LanguagesContext } from '../../contexts/Languages';
import LanguageSelector from '../layout/LanguageSelector';
import ProfilePic from '../../assets/images/profile.jpg';

const Intro = () => {
  const Language = useContext(LanguagesContext);

  const { intro } = Language.languageContent;

  //------------------------------------
  //---------- ATYPICAL CSS ------------
  //------------------------------------
  const introStyle = { height: '100%' };

  const profileStyles = { height: '8rem', margin: '1rem' };

  const holsterStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%'
  };

  const mainStyles = {
    backgroundImage: `url(${bg})`,
    height: '100vh',
    backgroundSize: 'cover',
    minWidth: '100%'
  };

  //------------------------------------
  //----------END ATYPICAL CSS ---------
  //------------------------------------

  return (
    <div style={mainStyles}>
      <div className='container center-align white-text' style={introStyle}>
        <LanguageSelector></LanguageSelector>
        <div style={holsterStyles}>
          <div>
            <h1 className='work-font-medium big-font'>
              {intro.salute}
              <span className='red-text work-font big-font'>, </span>
              {intro.introduction}
            </h1>
            <h4 className='work-font-thin medium-font'>
              Fullstack Developer Jr.
            </h4>
            <img
              className='circle'
              style={profileStyles}
              src={ProfilePic}
              alt='Lucas Castelo foto'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
