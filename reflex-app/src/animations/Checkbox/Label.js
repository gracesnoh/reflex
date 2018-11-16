import styled, { keyframes } from 'styled-components';

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

const checkStroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const Label = styled.label`
  .checkbox-svg {
    height: 16px;
    width: 16px;
    fill: white;
    border: 1px solid #ccc;
    border-radius: 3px;
    animation: ${props => props.checked && 
      `${checkScale} .15s, ${checkHover} .15s forwards;
    `}
  }

  & polyline {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke-dashoffset: 18.968;
    stroke-dasharray: 18.968;
    animation: ${props => props.checked && 
      `${checkStroke} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) normal forwards;
    `}
  }
`;
 
export default Label;