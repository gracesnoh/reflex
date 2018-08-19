import React from 'react';
import PropTypes from 'prop-types';

import './AnimationCard.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  handleShowCodeButton: PropTypes.func.isRequired,
  handleAnimateButton: PropTypes.func
};

const defaultProps = {
  handleAnimateButton: null
};

function AnimationCard(props) {
  const { title, children, handleShowCodeButton, handleAnimateButton } = props;

  return (
    <div onMouseOver={handleAnimateButton} className="animationCard">
      <h4 className="animationCard__header ">{title}</h4>
      <div className="animationCard__preview">{children}</div>
    </div>
  );
}

AnimationCard.propTypes = propTypes;
AnimationCard.defaultProps = defaultProps;

export default AnimationCard;
