import styled, { keyframes } from 'styled-components';

const inputSuccessPopUp = keyframes`
  37.5% {
    transform: translateY(-3px);
  }

  100% {
    transform: translateY(0.2);
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

const Image = styled.img`
  opacity: 0;
  position: absolute;
  height: 24px;
  width: 24px;
  ${props =>
    props.onSuccess &&
    `
    opacity: 1;
    animation: ${inputSuccessPopUp} .16s ease-out, ${inputSuccessPopIn} .12s ease-in-out;
  `};
  ${props =>
    props.onError &&
    `
    opacity: 1;
  `};
`;

export default Image;
