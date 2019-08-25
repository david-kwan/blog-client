import React, { Fragment } from 'react';

import SideBarItem from '../sidebar/SideBarItem';

const Navigation = () => {
  return (
    <Fragment>
      <SideBarItem title={'About'} />
      <SideBarItem
        title={'Blog'}
        anchors={[
          { message: 'Blog 1', href: 'http://localhost:3030' },
          { message: 'Blog 2', href: 'http://localhost:3030' }
        ]}
      />
      <SideBarItem title={'Contact'} />
    </Fragment>
  );
};

export default Navigation;
