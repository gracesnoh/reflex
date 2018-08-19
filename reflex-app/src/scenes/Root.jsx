import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/:animationTitle" component={Home} />
    </Switch>
  </Router>
);

export default ScreensRoot;
