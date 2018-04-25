import React from 'react';
import PropTypes from 'prop-types';

import './AnimationCard.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  handleShowCodeButton: PropTypes.func.isRequired,
  handleAnimateButton: PropTypes.func,
};

const defaultProps = {
  handleAnimateButton: null,
};

function AnimationCard(props) {
  const {
    title,
    children,
    handleShowCodeButton,
    handleAnimateButton,
  } = props;

  return(
    <div className="animationCard">
      <h4 className="animationCard__header ">
        {title}
      </h4>
      <div className="animationCard__preview">
        {children}
      </div>
      <div className="animationCard__card-actions">
        {handleAnimateButton &&
        <button
          className="card-button"
          onClick={handleAnimateButton}>
          Animate
        </button>}
        {handleShowCodeButton &&
          <button
            onClick={handleShowCodeButton}>
            View code
          </button>}
      </div>
    </div>
  );
}

AnimationCard.propTypes = propTypes;
AnimationCard.defaultProps = defaultProps;

export default AnimationCard;
