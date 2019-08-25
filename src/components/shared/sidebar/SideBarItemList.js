import React, { Fragment } from 'react';

import SideBarItemListAnchor from './SideBarItemListAnchor';

const SideBarItemList = ({ anchors }) => {
  return (
    <Fragment>
      <ul className="sidebar-item__list">
        {anchors.map((anchor, i) => (
          <SideBarItemListAnchor key={i.toString()} {...anchor} />
        ))}
      </ul>
    </Fragment>
  );
};

export default SideBarItemList;
