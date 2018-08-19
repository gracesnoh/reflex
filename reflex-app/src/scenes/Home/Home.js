import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import bloop from '../../animations/index';
// TODO: Remove this component.
import AnimationsContainer from '../../components/AnimationsContainer/AnimationsContainer';

export default class Home extends Component {
  render() {
    const { animationBloops } = this.props;
    return (
      <Fragment>
        <AnimationsContainer animations={animationBloops} />
      </Fragment>
    );
  }
}

Home.propTypes = {
  animationBloops: PropTypes.arrayOf(Object)
};
Home.defaultProps = {
  animationBloops: bloop
};
