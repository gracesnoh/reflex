import styled, { keyframes } from 'styled-components';

const inputErrorShake = keyframes`
  15.79% {
    transform: translateX(3px);
  }

  31.58% {
    transform: translateX(-5px);
  }

  47.37% {
    transform: translateX(4px);
  }

  63.18% {
    transform: translateX(-3px);
  }
  78.95% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(-1px);
  }
`;

const inputSuccessPopUp = keyframes`
  37.5% {
    transform: translateY(-3px);
  }

  100% {
    transform: translateY(0);
  }
`;

const inputSuccessPopIn = keyframes`
  80% {
    opacity: 1;
    transform: scale(1.1);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Input = styled.input`
  border-radius: 2px;
  color: rgb(85, 85, 85);
  line-height: 40px;
  height: 36px;
  padding: 0 12px;

  &:focus {
    outline: none;
  }

 // TODO: Have a way to enumerate props?
 // Remember input success pop in 
  ${props =>
    props.onSuccess &&
    `
    color: rgb(255, 0, 0);
    border: 1px solid $green;
    animation: ${inputSuccessPopUp} .16s ease-out; 
    
  `} 
    // TODO: Make me a constant

${props =>
  props.onError &&
  `
    color: rgb(255, 0, 0); 
    border: 1px solid $red;
    animation: ${inputErrorShake} .5s ease-in-out forwards;
  `};
`;

export default Input;
