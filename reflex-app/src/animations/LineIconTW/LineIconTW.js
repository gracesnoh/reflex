import React, { Fragment, Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const traceIcon = keyframes`
  0% {
    stroke-dashoffset: 300;
  }
  75% {
    stroke-dashoffset: 0;
    fill: rgba(29,161,242,0.3);
  }
  100% {
    stroke-dashoffset: 0;
    fill: #1DA1F2;
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
  stroke: #1DA1F2;
  stroke-width: 2;
  fill: rgba(29,161,242,0.3);
  stroke-dasharray: 300;
  stroke-dashoffset: 300;

  animation: ${props => props.hover && `${traceIcon} 0.5s ease-in-out forwards`};
`;

const LineIconTW = hover => (
  <Wrapper>
    <Icon hover={hover} viewBox="0 0 60 70">
      <path d="M19,54.1c22.4,0,34.7-18.6,34.7-34.7c0-0.5,0-1.1,0-1.6c2.4-1.7,4.4-3.9,6.1-6.3c-2.2,1-4.6,1.6-7,1.9
      c2.5-1.5,4.4-3.9,5.4-6.7c-2.4,1.4-5,2.4-7.7,3C45.7,4.8,38,4.6,33.1,9.2c-3.2,3-4.5,7.4-3.5,11.6c-9.8-0.5-18.9-5.1-25.1-12.7
      c-3.2,5.6-1.6,12.7,3.8,16.3c-1.9-0.1-3.8-0.6-5.5-1.5c0,0,0,0.1,0,0.2c0,5.8,4.1,10.8,9.8,11.9c-1.8,0.5-3.7,0.6-5.5,0.2
      c1.6,5,6.2,8.4,11.4,8.5C14,47,8.7,48.8,3.2,48.8c-1,0-1.9-0.1-2.9-0.2C5.9,52.2,12.4,54.1,19,54.1"/>
    </Icon>
  </Wrapper>
);

export default {
  title: 'Line Icon Twitter',
  render: LineIconTW
};
