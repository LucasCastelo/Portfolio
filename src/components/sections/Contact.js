import React, { useContext } from 'react';
import { LanguagesContext } from './../../contexts/Languages';
import bg from './../../assets/images/bg-section-contact.jpg';
import Separator from '../layout/Separator';

const Contact = () => {
  const Language = useContext(LanguagesContext);
  const { contact } = Language.languageContent;

  const bgStyle = {
    backgroundImage: `url(${bg})`,
    height: 'auto',
    display: 'block'
  };

  const iconsStyle = {
    margin: '0.8vw 0.8vw'
  };

  return (
    <div className='bg-style-contact' style={bgStyle}>
      <div className='container' style={{ display: 'absolute' }}>
        <div className='row center-align'>
          <h2 className='col s12 big-font white-text open-font'>{contact}</h2>
        </div>
        <div className='row center-align'>
          <Separator></Separator>
        </div>
        <div className='row center-align'>
          <div className='col s12'>
            <a href='https://github.com/LucasCastelo'>
              <i
                style={iconsStyle}
                className='fab fa-github big-font icon hover-color'
              ></i>
            </a>

            <a href='https://www.linkedin.com/in/lucas-castelo/'>
              <i
                style={iconsStyle}
                className='fab fa-linkedin big-font icon hover-color'
              ></i>
            </a>
            <a href='https://www.facebook.com/lucas.castelo.3914'>
              <i
                style={iconsStyle}
                className='fab fa-facebook-square big-font icon hover-color'
              ></i>
            </a>
          </div>
        </div>
        <div className='row' style={{ paddingBottom: '2vw' }}>
          <h1
            style={{ cursor: 'text', userSelect: 'text' }}
            className='email-style white-text open-font medium-font center-align col s12'
          >
            luc<span>.</span>as<span>.</span>branco<span>@</span>hotmail
            <span>.</span>com
          </h1>
        </div>
        <div className='row'>
          <p
            className='white-text small-font work-font-thin center-align s12 col'
            style={{ margin: '0', paddingBottom: '2vw', userSelect: 'text' }}
          >
            Design & Dev <span className='red-text'>-</span> Lucas Castelo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
