import React from 'react';
import { Link } from 'react-router-dom';

const SideBarItemTitle = props => {
  const { title, href } = props;
  return (
    <Link
      data-a8n={`sidebar-item__title-${title.toLowerCase()}`}
      to={href}
      className="sidebar-item__title"
    >
      {title}
    </Link>
  );
};

export default SideBarItemTitle;
