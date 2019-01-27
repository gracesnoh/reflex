import styled, { keyframes } from 'styled-components';


// TODO: This should just specify the size....Why transform?

const notifyShake = keyframes`
  15.56% {
    transform: rotate(7deg); }
  31.12% {
    transform: rotate(-6deg); }
  46.68% {
    transform: rotate(5deg); }
  62.24% {
    transform: rotate(-4deg); }
  77.8% {
    transform: rotate(3deg); }
  100% {
    transform: rotate(0deg); 
  } 
`;

const badgeDisappear = keyframes`
  100% {
    transform: scale(0);
  }
`;

const badgePopIn = keyframes`
  50% {
    opacity: 1;
    transform: scale(1.2); }
  100% {
    opacity: 1;
    transform: scale(1); }
`;

const Wrapper = styled.div`
  position: relative;
  width: 36px;
  height: 36px;

  ${Image} {
    animation: ${props => props.onMouseOver() && `${notifyShake} ease-out 0.68s`};
  }
  
  ${Badge} { 
   animation: ${props =>
     props.onMouseOver &&
     `${badgePopIn} ease-in-out .1s forwards, 
     ${badgeDisappear} ease-in-out .1s 1s forwards;
   `}
`;

export default Wrapper;