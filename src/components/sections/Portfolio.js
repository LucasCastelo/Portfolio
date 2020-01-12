import React, { useContext } from 'react';
import bg from '../../assets/images/bg-section-portfolio.jpg';
import Separator from './../layout/Separator';
import PortItems from './../layout/PortItems';
import { LanguagesContext } from '../../contexts/Languages';

const Portfolio = () => {
  const Language = useContext(LanguagesContext);
  const { port } = Language.languageContent;

  const bgStyle = {
    backgroundImage: `url(${bg})`
  };

  return (
    <div style={bgStyle} className='bg-style'>
      <div className='container'>
        <div className='row center-align'>
          <h1 className='col s12 white-text work-font-thin'>Portfolio</h1>
          <Separator />
        </div>
        <div className='row'>
          <PortItems sites={port}></PortItems>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
