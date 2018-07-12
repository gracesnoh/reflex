import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnimationCard from '../AnimationCard/AnimationCard';
import AnimationModal from '../AnimationModal/AnimationModal';

import './AnimationsContainer.css';
import '../../animations/styles.css';

const propTypes = {
  animations: PropTypes.array,
};

const defaultProps = {
  animations: [],
};

class AnimationsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.renderAnimationCard = this.renderAnimationCard.bind(this);

    this.state = {
      showModal: false,
    };
  }

  handleOpenModal(index) {
    this.setState({ showModal: true , selectedAnimationIndex: index});
  }

  handleCloseModal() {
    console.log('closed');
    this.setState({ showModal: false });
  }

  renderAnimationCard({ title, getHtmlCode, animate }, index) {
    return (
      <AnimationCard
        key={index}
        title={title}
        handleShowCodeButton={() => this.handleOpenModal(index)}
        handleAnimateButton={animate}>
        {getHtmlCode()}
      </AnimationCard>
    );
  }

  render() {
    const { showModal, selectedAnimationIndex } = this.state;
    const { animations } = this.props;

    return (
      <div className="animationsContainer">
        { showModal &&
          <AnimationModal
            animation={animations[selectedAnimationIndex]}
            handleCloseModal={this.handleCloseModal}
          />
        }
        <div className="animationsContainer__search">
          <input
            className="animationsContainer__search--input"
            placeholder="Search animations..."
          />
          <div className="animationsContainer__search--line"></div>
        </div>
        <div className="animationsContainer__library">
          { animations.map((animation, index) => this.renderAnimationCard(animation, index) )}
        </div>
      </div>
    );
  }
}

AnimationsContainer.propTypes = propTypes;
AnimationsContainer.defaultProps = defaultProps;

export default AnimationsContainer;
