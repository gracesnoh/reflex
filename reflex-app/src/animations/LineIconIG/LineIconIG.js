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

const LineIconIG = hover => (
  <Wrapper>
    <Icon hover={hover} viewBox="0 0 60 70">
      <g>
        <path d="M41.5,57.7H18.6c-9,0-16.2-7.3-16.2-16.2V18.6c0-9,7.3-16.2,16.2-16.2h22.9c9,0,16.2,7.3,16.2,16.2v22.9
          C57.7,50.4,50.4,57.7,41.5,57.7z M18.6,7.3c-6.2,0-11.2,5-11.2,11.2v22.9c0,6.2,5,11.2,11.2,11.2h22.9c6.2,0,11.2-5,11.2-11.2V18.6
          c0-6.2-5-11.2-11.2-11.2H18.6z"/>
        <path d="M30,44.1c-7.8,0-14.1-6.3-14.1-14.1S22.2,15.9,30,15.9S44.1,22.2,44.1,30S37.8,44.1,30,44.1z M30,20.9
          c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1s9.1-4.1,9.1-9.1S35,20.9,30,20.9z"/>
        <path d="M41.5,55.2H18.6C11,55.2,4.8,49,4.8,41.4V18.6C4.8,11,11,4.8,18.6,4.8h22.9
          c7.6,0,13.7,6.2,13.7,13.7v22.9C55.2,49,49.1,55.2,41.5,55.2z"/>
        <circle cx="30" cy="30" r="11.6"/>
        <circle cx="44.7" cy="15.2" r="3.3"/>
      </g>
    </Icon>
  </Wrapper>
);

export default {
  title: 'Line Icon Instagram',
  render: LineIconIG
};
