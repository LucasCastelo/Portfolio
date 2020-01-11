import React from 'react';
import separator from './../../assets/images/separator.png';

const Separator = props => {
  const { classesProp = '', cssProp = {}, row = false } = props;

  return (
    <React.Fragment>
      {row ? (
        <div className='row' style={{ margin: '0' }}>
          <div
            className={'col s12 center-align ' + classesProp}
            style={cssProp}
          >
            <img
              src={separator}
              alt=''
              style={{ marginBottom: '20px', width: '12vw' }}
            />
          </div>
        </div>
      ) : (
        <div className={'col s12 center-align ' + classesProp} style={cssProp}>
          <img src={separator} alt='' style={{ width: '12vw' }} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Separator;
