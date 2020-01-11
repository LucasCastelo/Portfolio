import React from 'react';

const AboutTopics = ({ topicDesc, topicTitle }) => {
  //CSS START -----
  const topicTitlesStyles = {
    color: '#DA2530',
    fontFamily: '"Proza Libre", sans-serif',
    fontSize: '4vh'
  };

  const descTopicStyles = {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '2.4vh'
  };
  //CSS END ------

  return (
    <div>
      <div className='col s12 l5'>
        <h2 className='' style={topicTitlesStyles}>
          {topicTitle}
        </h2>
        <p
          className='white-text'
          style={descTopicStyles}
          dangerouslySetInnerHTML={{ __html: topicDesc }}
        ></p>
      </div>
    </div>
  );
};

export default AboutTopics;
