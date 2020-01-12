import React from 'react';
import PortItem from './PortItem';

const PortItems = ({ sites }) => {
  return (
    <div>
      {sites.items.map(site => {
        return (
          <PortItem
            title={site.title}
            desc={site.desc}
            link={site.link}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};

export default PortItems;
