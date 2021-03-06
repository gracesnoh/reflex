import styled, { css, keyframes } from 'styled-components';

// ExpandContainer uses passed in container expansion sizes
// in order to determine how large the lines grow
// at dedicated time intervals.
// 
// Values should be [0, 1]
//
const ExpandContainerWithProps = (containerExpandSizes) => keyframes`
  0% {
    transform: scale(0.0, 1);
  }
  2%, 6.833% {
    transform: scale(${containerExpandSizes[0]}, 1);
  }
  10%, 35.333% {
    transform: scale(0.03, 1);
  }

  /* Start second cycle */
  37.1667% {
    transform: scale(${containerExpandSizes[1]}, 1);
  }
  45%, 66.667% {
    transform: scale(0.03, 1);
  }

  /* Start third cycle */
  68.333% {
    transform: scale(${containerExpandSizes[2]}, 1);
  }
  75.833%, 100% {
    transform: scale(0.03, 1);
  }
`

// const animationRule = css`
//   ${props => ExpandContainerWithProps(props.scaleSizes)} 5s ease-out infinite;
// `

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 25px;
  transform-origin: left;
  background-color: ${props => props.color || "#4F4F4F"};
  animation: ${props => ExpandContainerWithProps(props.scaleSizes)} 5s ease-out infinite;
`
export default Line;

