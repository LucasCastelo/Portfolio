import React, { useState } from 'react';
import Separator from './Separator';

const OtherQual = ({ qual }) => {
  const [indexSel, setIndexSel] = useState(0);

  //_______________________________________
  //_____________NEXT PREV FUNC____________
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
  //_____________NEXT PREV FUNC____________
  //_______________________________________

  return (
    <div className='col l3 center-align'>
      <h3 className='work-font-medium cursor-pointer medium-font white-text'>
        <i
          className='fas fa-chevron-left icon'
          style={{ margin: '0 0.5vw' }}
          onClick={prev}
        ></i>
        {qual[indexSel].name}
        <i
          className='fas fa-chevron-right icon'
          style={{ margin: '0 0.5vw' }}
          onClick={next}
        ></i>
      </h3>
      <Separator />
      {qual[indexSel].items.map(item => {
        return (
          <div key={Math.random()}>
            <p
              className='open-font default-font white-text'
              style={{ marginBottom: '0', padding: '0' }}
            >
              {item.name}
            </p>
            <p
              className='work-font-thin secondary-color small-font'
              style={{ marginTop: '0', marginBottom: '0vw' }}
            >
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OtherQual;
