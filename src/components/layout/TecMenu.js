import React, { useState, useEffect } from 'react';
import Separator from './Separator';
import TechDesc from './TechDesc';
import OtherQual from './OtherQual';

export const TecMenu = ({ qual }) => {
  const [descIndex, setDescIndex] = useState(0);
  const [lastId, setLastId] = useState('');
  const [qualChange, setQualChange] = useState('false');

  useEffect(() => {
    setQualChange(true);
  }, [qual]);

  const selStyle = {
    width: '20%',
    backgroundColor: 'red',
    height: '4px',
    margin: '0 auto',
    padding: '0',
    opacity: '0.4',
    transition: 'opacity 500ms'
  };

  const tecStyle = {
    fontSize: '1.5vw',
    margin: '0',
    transition: 'border 500ms'
  };

  const titleStyle = { fontSize: '2.5vw', marginTop: '0' };

  const selectDesc = (index, id) => {
    setDescIndex(index);

    if (qualChange === true) {
      const idPart = id.slice(0, 2);
      const lastIdPart = lastId.slice(2, 3);

      setLastId(idPart + lastIdPart);

      console.log('LANG CHANGE: ' + lastId);

      setQualChange(false);
    }

    if (lastId !== '') {
      document.getElementById(lastId).style.opacity = '0.4';
    }

    document.getElementById(id).style.opacity = '1';

    setLastId(id);
  };

  return (
    <React.Fragment>
      <div className='col m3 center-align'>
        <h3 className='col s12 white-text' style={titleStyle}>
          {qual.techTitle}
        </h3>
        <Separator
          classesProp='hide-on-med-and-down'
          cssProp={{ marginBottom: '10px' }}
        />

        {qual.tecs.map((tec, index) => {
          return (
            <div style={{ paddingBottom: '20px' }}>
              <p
                className={'hoverColor'}
                onClick={() => {
                  selectDesc(index, tec.id);
                }}
                style={tecStyle}
                key={tec.id}
              >
                {tec.name}
              </p>
              <div
                className='center-align'
                style={{ ...selStyle }}
                id={tec.id}
              ></div>
            </div>
          );
        })}
      </div>
      <TechDesc
        questions={{
          learn: qual.learn,
          ready: qual.ready,
          status: qual.status
        }}
        descIndex={descIndex}
        tecs={qual.tecs}
      />
      <OtherQual qual={qual.others} />
    </React.Fragment>
  );
};
