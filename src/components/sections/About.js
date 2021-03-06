import React, { useContext } from 'react';
import bg from '../../assets/images/bg-section-about.jpg';
import Separator from '../layout/Separator';
import QuestionIntro from '../layout/QuestionIntro';
import AboutTopics from '../layout/AboutTopics';

import { LanguagesContext } from '../../contexts/Languages';

const About = () => {
  const Language = useContext(LanguagesContext);
  const { about } = Language.languageContent;

  //CSS ABOUT --------------------------

  const bgStyle = {
    backgroundImage: `url(${bg})`
  };

  // CSS ABOUT END---------------------------
  return (
    <div style={bgStyle} className='bg-style'>
      <div className='container'>
        <QuestionIntro intro={about.intro} answer={about.answer} />
        <div className='row center-align'>
          <AboutTopics
            topicTitle={about.profTitle}
            topicDesc={about.profDesc}
          />
          <div
            className='col l2 hide-on-med-and-down'
            style={{ marginTop: '4vh' }}
          ></div>
          <Separator classesProp='hide-on-large-only' />
          <AboutTopics
            topicTitle={about.persTitle}
            topicDesc={about.persDesc}
          />
        </div>
        <div className='row'>
          <Separator row={true} />
        </div>
      </div>
    </div>
  );
};

export default About;
