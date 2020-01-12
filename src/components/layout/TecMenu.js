import React, { useState, useEffect } from 'react';
import Separator from './Separator';
import TechDesc from './TechDesc';
import OtherQual from './OtherQual';

export const TecMenu = ({ qual }) => {
  const [descIndex, setDescIndex] = useState(0);
  const [lastId, setLastId] = useState('');

  const customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: 'none'
    })
  };

  useEffect(() => {
    if (lastId !== '') {
      const idPart = qual.tecs[0].id.slice(0, 2);
      const lastIdPart = lastId.slice(2, 3);

      setLastId(idPart + lastIdPart);

      document.getElementById(idPart + lastIdPart).style.opacity = '1';
    }
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
    margin: '0',
    transition: 'border 500ms'
  };

  const selectDesc = (index, id) => {
    setDescIndex(index);

    if (lastId !== '') {
      document.getElementById(lastId).style.opacity = '0.4';
    }

    document.getElementById(id).style.opacity = '1';

    setLastId(id);
  };

  return (
    <React.Fragment>
      <div className='col s12 l3 center-align '>
        <h3 className='col s12 white-text work-font-medium medium-font'>
          {qual.techTitle}
        </h3>
        <Separator
          classesProp='hide-on-med-and-down'
          cssProp={{ marginBottom: '10px' }}
        />

        {qual.tecs.map((tec, index) => {
          return (
            <div
              style={{ paddingBottom: '20px' }}
              key={tec.id}
              className='hover-color open-font'
            >
              <p
                className='cursor-pointer medium-font no-focus'
                onClick={() => {
                  selectDesc(index, tec.id);
                }}
                style={{
                  ...tecStyle,
                  customStyles
                }}
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
