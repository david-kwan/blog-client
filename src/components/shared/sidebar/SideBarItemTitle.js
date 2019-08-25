import React from 'react';

const SideBarItemTitle = props => {
  const { title } = props;
  return (
    <a href="#" className="sidebar-item__title">
      {title}
    </a>
  );
};

export default SideBarItemTitle;
