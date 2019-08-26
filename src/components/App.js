import React from 'react';
import { hot } from 'react-hot-loader/root';

import Container from './container/Container';
import Header from './shared/Header';
import Content from './content/Content';

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
