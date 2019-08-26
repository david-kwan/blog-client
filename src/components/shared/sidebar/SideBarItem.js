import React, { Fragment } from 'react';

import SideBarItemTitle from './SideBarItemTitle';
import SideBarItemList from './SideBarItemList';

// Blog
// - { href: 'blog1', message: 'blog'1}

const SideBarItem = ({ title, href, anchors = [] }) => {
  return (
    <div className="sidebar-item__container">
      <SideBarItemTitle title={title} href={href} />
      <SideBarItemList anchors={anchors} />
    </div>
  );
};

export default SideBarItem;
