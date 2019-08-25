import React, { Fragment } from 'react';

import SideBarItemTitle from './SideBarItemTitle';
import SideBarItemList from './SideBarItemList';

// Blog
// - { href: 'blog1', message: 'blog'1}

const SideBarItem = ({ title, anchors = [] }) => {
  return (
    <div className="sidebar-item__container">
      <SideBarItemTitle title={title} />
      <SideBarItemList anchors={anchors} />
    </div>
  );
};

export default SideBarItem;
