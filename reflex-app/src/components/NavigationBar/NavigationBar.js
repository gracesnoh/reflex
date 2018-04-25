import React  from 'react';

import githubLogo from '../../images/github.png';
import reflexLogo from '../../images/reflex-logo.png';

import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="nav">
      <a className="logo" href="">
        <img src={reflexLogo} alt="reflex-logo"/>
      </a>
      <div className="title">
        <h4>Reflex Motion</h4>
      </div>
      <a className="github" href="https://github.com/unzunz/reflex" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="github-logo"/>
      </a>
    </div>
  );
}

export default NavigationBar;
