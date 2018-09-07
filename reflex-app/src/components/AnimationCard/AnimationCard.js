import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnimationCard.css';

//TODO: Should this be in scenes/Home?
class AnimationCard extends Component {
  state = {
    hover: false
  };
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title, children } = this.props;

    //TODO: Change me to styled components
    return (
      <div
        className="animationCard"
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <h4 className="animationCard__header ">{title}</h4>
        <div className="animationCard__preview">{children(this.state.hover)}</div>
      </div>
    );
  }
}

export default AnimationCard;
