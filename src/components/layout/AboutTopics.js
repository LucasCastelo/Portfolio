import React from 'react';

const AboutTopics = ({ topicDesc, topicTitle }) => {
  return (
    <div>
      <div className='col s12 l5'>
        <h2 className='proza-font medium-font red-text'>{topicTitle}</h2>
        <p
          className='white-text open-font small-font'
          dangerouslySetInnerHTML={{ __html: topicDesc }}
        />
      </div>
    </div>
  );
};

export default AboutTopics;
