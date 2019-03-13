import styled, { keyframes } from 'styled-components';

// Sliding across the page is an animation that has multiple
// nuanced components. For one, we let the div expand partially
// before we start sliding.
//
// We also wait a small moment before fading the opacity of
// the div. 
// 
// Lastly, we have to reset the animation and turn its opacity
// back up to 1 before ending the animation.
// 
const SlideAcrossPageWithProps = (fadeTime) => keyframes`
	0%, 1% {
		transform: translate3d(0px, 0, 0);
		opacity: 1;
	}
	10% {
		transform: translate3d(90%, 0, 0);
		opacity: 1;
	}
	${fadeTime[0]}% {
		transform: translate3d(90%, 0, 0);
		opacity: 0;
	}
	35% {
		transform: translate3d(0px, 0, 0);
		opacity: 0;
	}
	35.333%, 37.1667% {
		transform: translate3d(0px, 0, 0);
		opacity: 1;
	}
	45%, 50% {
		transform: translate3d(90%, 0, 0);
		opacity: 1;
	}
	${fadeTime[1]}% {
		transform: translate3d(90%, 0, 0);
		opacity: 0;
	}
	66.333% {
		transform: translate3d(0px, 0, 0);
		opacity: 0;
	}

	66.667%, 68.333% {
		transform: translate3d(0px, 0, 0);
		opacity: 1;
	}
	75.833%, 83.333% {
		transform: translate3d(90%, 0, 0);
		opacity: 1;
	}
	${fadeTime[2]}% {
		transform: translate3d(90%, 0, 0);
		opacity: 0;
	}
	100% {
		transform: translate3d(0px, 0, 0);
		opacity: 0;
	}
`

// This styling should be okay so far, it's absolute to the 
// AnimationContainer and the top / left only describes the individual
// lines.
const LineContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: ${props => props.top || "0px"};
	left: ${props => props.left || "0%"};
	animation: ${props => SlideAcrossPageWithProps(props.fadeTime)} 4.5s linear infinite;
	animation-fill-mode: forwards;
`

export default LineContainer;
