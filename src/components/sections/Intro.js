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
  const titleStyle = {
    fontSize: '8vh'
  };

  const subtitleStyle = {
    fontSize: '4vh'
  };

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
    minWidth: '100vw'
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
            <h1 style={titleStyle} className='work-font-medium'>
              {intro.salute}
              <span className='red-text work-font'>, </span>
              {intro.introduction}
            </h1>
            <h4 style={subtitleStyle} className='work-font-thin'>
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
