import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import GettingStarted from './GettingStarted';

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gettingstarted" component={GettingStarted} />
    </Switch>
  </Router>
);

export default ScreensRoot;
