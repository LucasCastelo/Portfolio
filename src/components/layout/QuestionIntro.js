import React from 'react';

import Separator from '../layout/Separator';

const QuestionIntro = props => {
  const { intro, answer } = props;

  //CSS START ------
  const questionStyle = {
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: '100',
    fontSize: '3vh',
    marginBottom: '0'
  };

  const answerStyle = {
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: '400',
    fontSize: '3vh',
    marginTop: '0'
  };

  //CSS END -----

  return (
    <div>
      <div className='row' style={{ marginBottom: '5px' }}>
        <p className='col s12 center-align red-text' style={questionStyle}>
          {intro}
        </p>
      </div>
      <div className='row'>
        <h1 className='col s12 center-align white-text' style={answerStyle}>
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
