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

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #BDBDBD;
  color: #4f4f4f;
  line-height: 40px;
  height: 36px;
  padding: 0 12px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

 // TODO: Have a way to enumerate props?
 // Remember input success pop in 
  ${props =>
    props.onSuccess &&
    `
    border: 1px solid #66BB66;
    animation: ${inputSuccessPopUp} .25s ease-out; 
    
  `} 
    // TODO: Make me a constant

${props =>
  props.onError &&
  `
    border: 1px solid #EE4444;
    animation: ${inputErrorShake} .5s ease-in-out forwards;
  `};
`;

export default Input;
