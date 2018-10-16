import React, { Fragment, Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const traceIcon = keyframes`
  0% {
    stroke-dashoffset: 400;
  }
  75% {
    stroke-dashoffset: 0;
    fill: rgba(0,0,0,0.3);
  }
  100% {
    stroke-dashoffset: 0;
    fill: black;
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
`

const Icon = styled.svg`
  width: 24px;
  height: 30px;
  stroke: black;
  stroke-width: 2;
  fill: rgba(0,0,0,0.3);
  stroke-dasharray: 400;
  stroke-dashoffset: 400;

  animation: ${props => props.hover && `${traceIcon} 0.5s ease-in-out forwards`};
`;

const LineIconMD = hover => (
  <Wrapper>
    <Icon hover={hover} viewBox="0 0 60 70">
      <path d="M7.7,16.3c0.1-0.7-0.2-1.4-0.7-1.9L1.6,7.8v-1h16.9l13.1,28.7L43.1,6.8h16.1v1l-4.7,4.5
        c-0.4,0.3-0.6,0.8-0.5,1.3v32.8c-0.1,0.5,0.1,1,0.5,1.3l4.5,4.5v1H36.2v-1l4.7-4.6c0.5-0.5,0.5-0.6,0.5-1.3V19.8L28.3,53.1h-1.8
        L11.2,19.8v22.3c-0.1,0.9,0.2,1.9,0.8,2.6l6.1,7.4v1H0.8v-1L7,44.6C7.6,44,7.9,43,7.7,42.1V16.3z"/>
    </Icon>
  </Wrapper>
);

export default {
  title: 'Line Icon Medium',
  render: LineIconMD
};
