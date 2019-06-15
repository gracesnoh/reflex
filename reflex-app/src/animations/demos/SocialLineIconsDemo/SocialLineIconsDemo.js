import React, { Component } from 'react';
import styled from 'styled-components';
import SocialLineIcons from '../../SocialLineIcons';

class SocialLineIconsDemo extends Component {
  constructor(props) {
    super(props);
    this.socialIconsRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.hover) {
      this.socialIconsRef.current.handleOnClick()
    }
  }

  render() {
    return (
      <SocialLineIcons ref={this.socialIconsRef}/>
    );
  }
}

class SocialLineIconsExamples extends Component {

  render() {
    return (
      <div></div>
    );
  }
}

export default {
  title: 'Social Line Icons',
  mainDemo: SocialLineIconsDemo,
  examples: SocialLineIconsExamples
};