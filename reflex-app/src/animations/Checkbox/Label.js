import styled, { keyframes, css } from 'styled-components';

const checkScale = keyframes`
  100% {
    transform: scale(.85);
  }
`;

const checkHover = props => keyframes`
    100% {
      background-color: ${props.backgroundColor || '#7567F7'}; // TODO: Put color in constant
      border: 1px solid ${props.backgroundColor || '#7567F7'};
      stroke: #fff;
    }
  `

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
    animation: ${props => props.isChecked && 
      css`${checkScale} .15s, ${checkHover(props)} .15s forwards;
    `}
  }

  & polyline {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke-dashoffset: 18.968;
    stroke-dasharray: 18.968;
    animation: ${props => props.isChecked && 
      css`${checkStroke} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) normal forwards;
    `}
  }
`;
 
export default Label;