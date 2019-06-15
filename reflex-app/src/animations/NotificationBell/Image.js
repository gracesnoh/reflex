import React, { Component } from 'react';
import styled, { css,  keyframes }   from 'styled-components';

const notifyShake = keyframes`
  15.56% {
    transform: rotate(7deg); }
  31.12% {
    transform: rotate(-6deg); }
  46.68% {
    transform: rotate(5deg); }
  62.24% {
    transform: rotate(-4deg); }
  77.8% {
    transform: rotate(3deg); }
  100% {
    transform: rotate(0deg); 
  } 
`;

const StyledIcon = styled.svg``;

class Bell extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <StyledIcon className={this.props.className} bellColor={this.props.bellColor} width="24" height="24" viewBox="0 0 36 36" preserveAspectRatio="xMidyMid">
        <title>bell-solid</title>
        <path class="clr-i-solid clr-i-solid-path-1" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"></path><path class="clr-i-solid clr-i-solid-path-2" d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"></path>
        <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
      </StyledIcon>
    );
  }
}

const Image = styled(Bell)``;

export default Image;