import React from 'react';
import PropTypes from 'prop-types';

import './AnimationModal.css';

const propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

function AnimationModal(props) {
  const { handleCloseModal } = props;
  return (
    <div className='animationModal'>
      <div onClick={handleCloseModal}>
        x
      </div>
    </div>
  );
}

AnimationModal.propTypes = propTypes;

export default AnimationModal;
