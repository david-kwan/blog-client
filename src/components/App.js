import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Container from './container/Container';
import Content from './content/Content';

import Header from './shared/Header';
import About from './about/About';
import BlogList from './blog/BlogList';
import BlogDetail from './blog/BlogDetail';

{
  /* <BrowserRouter>
        <Fragment>
          <Header />
          <Route path="/" exact component={About} />
          <Route path="/blog" exact component={BlogList} />
          <Route path="/blog/detail" exact component={BlogDetail} />
        </Fragment>
      </BrowserRouter> */
}

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <Content />
      </Container>
    </div>
  );
};

export default hot(App);
