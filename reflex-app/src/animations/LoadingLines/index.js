import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

import Line from './line';
import LineContainer from './line_container';

const AnimationContainer = styled.div`
  position: relative;
  width: 60px;
  height: 80px;
  margin: 0 auto;
  transition: all .1s ease-in-out;
`

class LoadingLines extends PureComponent {
  constructor(props) {
    super(props);
      this.state = {
        clicked: false,
      };
      this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <AnimationContainer onClick={this.handleOnClick}>
        <LineContainer clicked={this.state.clicked} top="35%" fadeTime={[22, 63, 96]}>
          <Line clicked={this.state.clicked} scaleSizes={[0.4, 0.56, 0.58]} />
        </LineContainer>
        <LineContainer clicked={this.state.clicked} top="45%" left="10%" fadeTime={[26, 62, 95]}>
          <Line clicked={this.state.clicked} scaleSizes={[0.58, 0.38, 0.40]} />
        </LineContainer>
        <LineContainer clicked={this.state.clicked} top="55%" left="5%" fadeTime={[28, 64, 97]}>
          <Line clicked={this.state.clicked} scaleSizes={[0.38, 0.42, 0.45]} />
        </LineContainer>
        </AnimationContainer>
    );
  }
}

export default LoadingLines;

