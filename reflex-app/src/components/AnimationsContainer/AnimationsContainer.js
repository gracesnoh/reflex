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

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  renderAnimationCard({ title, getHtmlCode, animate }, key) {
    return (
      <AnimationCard
        key={key}
        title={title}
        handleShowCodeButton={this.handleOpenModal}
        handleAnimateButton={animate}>
        {getHtmlCode()}
      </AnimationCard>
    );
  }

  render() {
    const { showModal } = this.state;
    const { animations } = this.props;

    return (
      <div className="animationsContainer">
        { showModal &&
          <AnimationModal
            handleCloseModal={this.handleCloseModal}
          />
        }
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
