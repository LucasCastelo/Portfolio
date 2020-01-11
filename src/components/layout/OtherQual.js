import React, { useState } from 'react';
import Separator from './Separator';
import './../css/anim.css';

const OtherQual = ({ qual }) => {
  const [indexSel, setIndexSel] = useState(0);

  const titleStyles = {
    fontSize: '2.5vw',
    color: 'white',
    margin: '0'
  };
  const iconStyle = {
    margin: '0 0.5vw',
    cursor: 'pointer'
  };

  const nameStyle = {
    color: 'white',
    margin: '0',
    fontSize: '1.5vw'
  };

  const descStyle = {
    margin: '0',
    marginBottom: '10px',
    color: '#FF817C'
  };
  const next = () => {
    if (indexSel === qual.length - 1) {
      return setIndexSel(0);
    }

    return setIndexSel(indexSel + 1);
  };

  const prev = () => {
    if (indexSel === 0) {
      return setIndexSel(qual.length - 1);
    }

    return setIndexSel(indexSel - 1);
  };

  return (
    <div className='col l3 center-align'>
      <h3 style={titleStyles}>
        <i
          className='fas fa-chevron-left icon'
          style={iconStyle}
          onClick={prev}
        ></i>
        {qual[indexSel].name}
        <i
          className='fas fa-chevron-right icon'
          style={iconStyle}
          onClick={next}
        ></i>
      </h3>
      <Separator />
      {qual[indexSel].items.map(item => {
        return (
          <div key={Math.random()} className='center-align'>
            <p style={nameStyle}>{item.name}</p>
            <p style={descStyle}>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OtherQual;
