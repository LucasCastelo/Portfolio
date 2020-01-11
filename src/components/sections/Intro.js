import React, { useContext } from 'react';
import bg from '../../assets/images/bg-section-intro.jpg';
import { LanguagesContext } from '../../contexts/Languages';
import LanguageSelector from '../layout/LanguageSelector';
import ProfilePic from '../../assets/images/profile.jpg';

const Intro = () => {
  const Language = useContext(LanguagesContext);

  const { intro } = Language.languageContent;

  //STYLES ---------------------
  const titleStyle = {
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: '500',
    fontSize: '8vh'
  };

  const subtitleStyle = {
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: '100',
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

  const parentStyles = { backgroundImage: `url(${bg})`, height: '100vh' };
  //STYLES END --------------------

  //fontFamily: '"Proza Libre", sans-serif'
  //fontFamily: '"Open Sans", sans-serif'
  //fontFamily: '"Work Sans", sans-serif'
  //

  return (
    <div style={parentStyles}>
      <div className='container center-align white-text' style={introStyle}>
        <LanguageSelector></LanguageSelector>
        <div style={holsterStyles}>
          <div>
            <h1 style={titleStyle}>
              {intro.salute}
              <span className='red-text'>, </span>
              {intro.introduction}
            </h1>
            <h4 style={subtitleStyle}>Fullstack Developer Jr.</h4>
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
