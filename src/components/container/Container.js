import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Container = props => {
  return (
    <div className="container">
      <BrowserRouter>{props.children}</BrowserRouter>
    </div>
  );
};

export default Container;
