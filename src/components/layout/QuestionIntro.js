import React from 'react';

import Separator from '../layout/Separator';

const QuestionIntro = props => {
  const { intro, answer } = props;

  return (
    <div>
      <div className='row' style={{ marginBottom: '0' }}>
        <p
          className='col s12 center-align red-text work-font-thin small-font'
          style={{ marginBottom: '0' }}
        >
          {intro}
        </p>
      </div>
      <div className='row'>
        <h1
          className='col s12 center-align white-text work-font-medium medium-font'
          style={{ marginTop: '0' }}
        >
          <span className='red-text'>"</span>
          {answer}
          <span className='red-text'>"</span>
        </h1>
      </div>
      <Separator />
    </div>
  );
};

export default QuestionIntro;
