import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Detail from './Detail';

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:animationTitle" component={Detail} />
    </Switch>
  </Router>
);

export default ScreensRoot;
