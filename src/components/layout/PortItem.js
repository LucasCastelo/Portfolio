import React from 'react';
import portPic1 from '../../assets/images/placeholder-portfolio.jpg';
import Separator from './Separator';

const PortItem = ({ title, desc, link }) => {
  return (
    <div>
      <div className='col l4 m12 s12 center-align'>
        <h2 className='white-text proza-font medium-font'>{title}</h2>
        <img src={portPic1} alt='portfolio pic' style={{ width: '30vh' }} />
        <div>
          <p className='white-text work-font-thin medium-font'>{desc}</p>
          <a href={link}>ACESSAR</a>
        </div>
        <Separator
          row={true}
          cssProp={{ marginTop: '2vw' }}
          classesProp={'hide-on-med-and-up'}
        ></Separator>
      </div>
    </div>
  );
};

export default PortItem;
