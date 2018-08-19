import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import NavigationBar from './NavigationBar/NavigationBar';
import ScreensRoot from '../scenes/Root';


function App() {
  return (
    <div className="app__container">
      <NavigationBar />
      <ScreensRoot />
    </div>
  );
}

export default App;
