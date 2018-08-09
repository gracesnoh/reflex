import React from 'react';

import NavigationBar from './NavigationBar/NavigationBar';
import ReflexHeader from './ReflexHeader/ReflexHeader';
import AnimationsContainer from './AnimationsContainer/AnimationsContainer';

import bloop from '../animations/index';
import '../animations/styles.css';

function App() {
  return (
    <div className="app__container">
      <NavigationBar />
      <AnimationsContainer animations={bloop}/>
    </div>
  );
}

export default App;
