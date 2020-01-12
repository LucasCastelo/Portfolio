import React from 'react';

const TechDesc = props => {
  const questStyles = {
    marginBottom: '0',
    marginTop: '20px'
  };

  const questClasses = 'red-text work-font-thin small-font';
  const descClasses = 'white-text open-font default-font red-text';

  const descStyles = {
    margin: '0',
    marginBottom: '20px'
  };

  const { learn, ready, status } = props.questions;
  const { descIndex, tecs } = props;

  return (
    <div className='col l6 m6 s12 center-align'>
      <h2 className='work-font-thin white-text'>{tecs[descIndex].name}</h2>
      <h3 style={questStyles} className={questClasses}>
        {learn}
      </h3>
      <p style={descStyles} className={descClasses}>
        {tecs[descIndex].learn}
      </p>
      <h3 style={questStyles} className={questClasses}>
        {ready}
      </h3>
      <p style={descStyles} className={descClasses}>
        {tecs[descIndex].ready}
      </p>
      <h3 style={questStyles} className={questClasses}>
        {status}
      </h3>
      <p style={descStyles} className={descClasses}>
        {tecs[descIndex].status}
      </p>
    </div>
  );
};

export default TechDesc;
