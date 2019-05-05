import React, { Component } from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import './AnimationCard.css';

//TODO: Should this be in scenes/Home since it's used there?
class AnimationCard extends Component {
  state = {
    hover: false
  };
  static propTypes = {
    title: PropTypes.string.isRequired
    // Children should be explicit props, or named something else
  };

  render() {
    const { title, children, detailTitle} = this.props;

    //TODO: Change me to styled components
    return (
      <Link to={detailTitle}>
        <div
          className="animationCard"
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          <div className="animationCard__preview">{children(this.state.hover)}</div>
          <h4 className="animationCard__header ">{title}</h4>
        </div>
      </Link>
    );
  }
}

export default AnimationCard;



