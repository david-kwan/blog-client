import React from 'react';

const SideBarItemListAnchor = ({ href, message }) => {
  return (
    <li className="sidebar-item__anchor">
      <a href={href}>{message}</a>
    </li>
  );
};

export default SideBarItemListAnchor;
