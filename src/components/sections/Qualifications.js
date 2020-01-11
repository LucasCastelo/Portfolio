import React, { useContext } from 'react';
import { LanguagesContext } from '../../contexts/Languages';
import bg from '../../assets/images/bg-section-qualifications.jpg';
import QuestionIntro from '../layout/QuestionIntro';
import { TecMenu } from '../layout/TecMenu';
import Separator from '../layout/Separator';

const Qualifications = () => {
  const Language = useContext(LanguagesContext);
  const { qual } = Language.languageContent;
  const mainStyle = {
    backgroundImage: `url(${bg})`,
    minHeight: '100vh',
    paddingBottom: '1vw',
    backgroundSize: 'cover',
    minWidth: '100vw'
  };

  return (
    <div style={mainStyle}>
      <div className='container'>
        <QuestionIntro intro={qual.intro} answer={qual.answer} />
        <div className='row'>
          <TecMenu qual={qual} />
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default Qualifications;
