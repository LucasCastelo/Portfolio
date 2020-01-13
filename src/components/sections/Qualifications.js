import React, { useContext } from 'react';
import { LanguagesContext } from '../../contexts/Languages';
import bg from '../../assets/images/bg-section-qualifications.jpg';
import QuestionIntro from '../layout/QuestionIntro';
import { TecMenu } from '../layout/TecMenu';
import Separator from '../layout/Separator';

const Qualifications = () => {
  const Language = useContext(LanguagesContext);
  const { qual } = Language.languageContent;
  const bgStyle = {
    backgroundImage: `url(${bg})`
  };

  return (
    <div style={bgStyle} className='bg-style'>
      <div className='container'>
        <QuestionIntro intro={qual.intro} answer={qual.answer} />
        <div className='row'>
          <TecMenu qual={qual} />
        </div>
        <Separator cssProp={{ marginBottom: '2vh' }} />
      </div>
    </div>
  );
};

export default Qualifications;
