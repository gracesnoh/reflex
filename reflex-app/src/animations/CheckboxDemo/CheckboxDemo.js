import React, { Fragment, Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const checkStroke = keyframes`
 100% {
   stroke-dashoffset: 0;
 }
`;

const checkScale = keyframes`
  100% {
    transform: scale(.85);
  }
`;

const checkHover = keyframes`
  100% {
    background-color: #7567F7;
    border: 1px solid #7567F7;
    stroke: #fff;
  }
`;

const Checkbox = styled.div`
  position: relative;
  width: 36px;
  height: 36px;

  > input {
    display: none;

    & + label .checkbox-svg {
      height: 16px;
      width: 16px;
      fill: white;
      border: 1px solid #ccc;
      border-radius: 3px;
      animation: ${props => 
        props.hover && 
        `${checkScale} .15s,
         ${checkHover} .15s forwards;
      `};

      & polyline {
        fill: none;
        stroke: #fff;
        stroke-width: 2;
        stroke-miterlimit: 10;
        stroke-dashoffset: 18.968;
        stroke-dasharray: 18.968;
        animation: ${props => props.hover && 
          `${checkStroke} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) normal forwards;
        `}
      }
    }
  }
`;

const CheckboxDemo = hover => (
  <Checkbox hover={hover}>
    <input className="checkbox" id="checkbox" type="checkbox"/>
    <label for="checkbox">
      <svg 
        className="checkbox-svg" 
        version="1.1" 
        id="check" 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" 
        y="0px" 
        viewBox="0 0 16 16"
      >
        <polyline id="check-line" className="st0" points="2.1,7.6 6.2,11.5 13.9,3.7 " />
      </svg>
    </label>
  </Checkbox>
);

export default {
  title: 'Checkbox',
  render: CheckboxDemo
};
