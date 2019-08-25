import React from 'react';
import Navigation from '../shared/navigation/Navigation';

const Content = props => {
  return (
    <div className="content">
      <nav className="sidebar">
        <Navigation />
      </nav>
      <main className="info">Some stuff about me!!</main>
    </div>
  );
};

export default Content;
