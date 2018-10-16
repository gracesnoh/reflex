import React, { Fragment, Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const traceIcon = keyframes`
  0% {
    stroke-dashoffset: 200;
  }
  75% {
    stroke-dashoffset: 0;
    fill: rgba(66,102,178,0.3);
  }
  100% {
    stroke-dashoffset: 0;
    fill: #4266b2;
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
  stroke: #4266b2;
  stroke-width: 2;
  fill: rgba(66,102,178,0.3);
  stroke-dasharray: 200;
  stroke-dashoffset: 200;

  animation: ${props => props.hover && `${traceIcon} 0.5s ease-in-out forwards`};
`;

const LineIconFB = hover => (
  <Wrapper>
    <Icon hover={hover} viewBox="0 0 60 70">
      <path d="M23.5,60V33.2h-9V22.5h9v-8.4C23.5,5,29.1,0,37.2,0c3.9,0,7.3,0.3,8.2,0.4V10h-5.6c-4.4,0-5.3,2.1-5.3,5.2v7.3
      h10l-1.4,10.7h-8.6V60H23.5z"/>
    </Icon>
  </Wrapper>
);

export default {
  title: 'Line Icon Facebook',
  render: LineIconFB
};
