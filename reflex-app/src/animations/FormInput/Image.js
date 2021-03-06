import styled, { keyframes, css } from 'styled-components';

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

const inputImagePopIn = keyframes`
  0% {
    transform: scale(0);
  }

  80% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
`;

const Image = styled.img`
  transform: scale(0);
  visibility: hidden;
  position: absolute;
  bottom: 6px;
  right: 6px;
  height: 24px;
  width: 24px;
  z-index: 2;

  ${({isComplete, onSuccess}) => 
    isComplete && onSuccess && css`
      visibility: visible;
      animation: ${inputSuccessPopUp} .25s ease-out, ${inputImagePopIn} .25s ease-in-out forwards;
  `}
  ${({isComplete, onFailure}) => 
     isComplete && onFailure && css`
      visibility: visible;
      animation: ${inputImagePopIn} .25s ease-in-out forwards, ${inputErrorShake} .5s ease-in-out forwards;
  `};  
`;

export default Image;
