import React, { Fragment, Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const traceFb = keyframes`
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

const traceTw = keyframes`
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

const traceMd = keyframes`
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
`

const Fb = styled.svg`
  width: 24px;
  height: 30px;
  stroke: #4266b2;
  stroke-width: 1.5;
  fill: rgba(66,102,178,0.3);
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  margin-right: 6px;

  animation: ${props => props.hover && `${traceFb} 0.5s ease-in-out forwards`};
`;

const Tw = styled.svg`
  width: 24px;
  height: 30px;
  stroke: #1DA1F2;
  stroke-width: 1.5;
  fill: rgba(29,161,242,0.3);
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  margin-right: 6px;

  animation: ${props => props.hover && `${traceTw} 0.5s ease-in-out forwards`};
`;

const Md = styled.svg`
  width: 24px;
  height: 30px;
  stroke: black;
  stroke-width: 1.5;
  fill: rgba(0,0,0,0.3);
  stroke-dasharray: 400;
  stroke-dashoffset: 400;

  animation: ${props => props.hover && `${traceMd} 0.5s ease-in-out forwards`};
`;

const SocialLineIcons = hover => (
  <Wrapper>
    <Fb hover={hover} viewBox="0 0 60 70">
      <path d="M23.5,60V33.2h-9V22.5h9v-8.4C23.5,5,29.1,0,37.2,0c3.9,0,7.3,0.3,8.2,0.4V10h-5.6c-4.4,0-5.3,2.1-5.3,5.2v7.3
      h10l-1.4,10.7h-8.6V60H23.5z"/>
    </Fb>
    <Tw hover={hover} viewBox="0 0 60 70">
      <path d="M19,54.1c22.4,0,34.7-18.6,34.7-34.7c0-0.5,0-1.1,0-1.6c2.4-1.7,4.4-3.9,6.1-6.3c-2.2,1-4.6,1.6-7,1.9
      c2.5-1.5,4.4-3.9,5.4-6.7c-2.4,1.4-5,2.4-7.7,3C45.7,4.8,38,4.6,33.1,9.2c-3.2,3-4.5,7.4-3.5,11.6c-9.8-0.5-18.9-5.1-25.1-12.7
      c-3.2,5.6-1.6,12.7,3.8,16.3c-1.9-0.1-3.8-0.6-5.5-1.5c0,0,0,0.1,0,0.2c0,5.8,4.1,10.8,9.8,11.9c-1.8,0.5-3.7,0.6-5.5,0.2
      c1.6,5,6.2,8.4,11.4,8.5C14,47,8.7,48.8,3.2,48.8c-1,0-1.9-0.1-2.9-0.2C5.9,52.2,12.4,54.1,19,54.1"/>
    </Tw>
    <Md hover={hover} viewBox="0 0 60 70">
      <path d="M7.7,16.3c0.1-0.7-0.2-1.4-0.7-1.9L1.6,7.8v-1h16.9l13.1,28.7L43.1,6.8h16.1v1l-4.7,4.5
        c-0.4,0.3-0.6,0.8-0.5,1.3v32.8c-0.1,0.5,0.1,1,0.5,1.3l4.5,4.5v1H36.2v-1l4.7-4.6c0.5-0.5,0.5-0.6,0.5-1.3V19.8L28.3,53.1h-1.8
        L11.2,19.8v22.3c-0.1,0.9,0.2,1.9,0.8,2.6l6.1,7.4v1H0.8v-1L7,44.6C7.6,44,7.9,43,7.7,42.1V16.3z"/>
    </Md>
  </Wrapper>
);

export default {
  title: 'Social Line Icons',
  render: SocialLineIcons
};
