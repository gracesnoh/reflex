import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

import Line from './line';
import LineContainer from './line_container';

// TODO(JG)
// We most likely can remove all of the default sizing
// later since this animation will need to fit into
// the box that holds all animations
const AnimationContainer = styled.div`
	position: relative;
	width: 100px;
	height: 5px;
	margin: 0 auto;
	transition: all .1s ease-in-out;
`

class LoadingLines extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		// Have chosen to make LoadingLines a React Component
		// because it contains multiple divs working in conjunction
		// in order to perform the animation
		return (
			<AnimationContainer>
				<LineContainer clicked={this.props.clicked} fadeTime={[22, 63, 96]}>
					<Line clicked={this.props.clicked} scaleSizes={[0.4, 0.56, 0.58]} />
				</LineContainer>
				<LineContainer clicked={this.props.clicked} top="10px" left="10%" fadeTime={[26, 62, 95]}>
					<Line clicked={this.props.clicked} scaleSizes={[0.58, 0.38, 0.40]} />
				</LineContainer>
				<LineContainer clicked={this.props.clicked} top="20px" left="5%" fadeTime={[28, 64, 97]}>
					<Line clicked={this.props.clicked} scaleSizes={[0.38, 0.42, 0.45]} />
				</LineContainer>
			</AnimationContainer>
		);
	}
}

export default LoadingLines;