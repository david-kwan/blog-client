import React from 'react';
import { Link } from 'react-router-dom';

const SideBarItemTitle = props => {
  const { title, href } = props;
  return (
    <Link to={href} className="sidebar-item__title">
      {title}
    </Link>
  );
};

export default SideBarItemTitle;
