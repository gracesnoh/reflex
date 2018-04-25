import React from 'react';

import reflexOrigami from '../../images/reflex-origami.gif';

import './ReflexHeader.css';

function ReflexHeader() {
  return (
    <div className="reflexHeader">
      <div className="reflexHeader__origami-gif">
        <img src={reflexOrigami} alt="reflex-origami" />
      </div>
      <div className="reflexHeader__description-text">
        <h1>Bring your website to life</h1>
        <h3>Build organic digital experiences that incorporate real world motion</h3>
      </div>
    </div>
  );
}

export default ReflexHeader;
