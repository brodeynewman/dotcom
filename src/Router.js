import React from 'react';
import { Switch, Route } from 'react-router-dom';
import withLazyLoad from './components/withLazyLoad';

const Home = withLazyLoad(() => import('./pages/Home'));
const About = withLazyLoad(() => import('./pages/About'));
const Contact = withLazyLoad(() => import('./pages/Contact'));

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Router;
