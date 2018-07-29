import React  from 'react';

import githubLogo from '../../images/github.png';
import reflexLogo from '../../images/reflex-logo.png';

import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="nav">
      <a className="nav__header" href="">
        <div className="logo">
          <img src={reflexLogo} alt="reflex-logo"/>
        </div>
        <span className="title">Reflex Motion</span>
      </a>
      <div className="nav__footer">
        <a className="github" href="https://github.com/gracesnoh/reflex" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="github-logo"/>
          <span>View on Github</span>
        </a>
        <a className="about" href="">
          <span>About Reflex</span>
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
