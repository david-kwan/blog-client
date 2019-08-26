import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import Navigation from '../shared/navigation/Navigation';

const Home = lazy(() => import('../home/Home'));
const About = lazy(() => import('../about/About'));
const Blog = lazy(() => import('../blog/BlogList'));
const Contact = lazy(() => import('../contact/Contact'));

const SuspenseFallback = () => <div>Show Fall back</div>;

const Content = () => {
  return (
    <div className="content">
      <nav className="sidebar">
        <Navigation />
      </nav>
      <main className="info">
        <Suspense fallback={<SuspenseFallback />}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
        </Suspense>
      </main>
    </div>
  );
};

export default Content;
