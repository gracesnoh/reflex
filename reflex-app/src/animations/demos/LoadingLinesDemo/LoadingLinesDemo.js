import React, { Component } from 'react';

import LoadingLines from '../../LoadingLines'

// TODO(JG)
// Animation shouldn't start until a hover/click
// Don't give the LoadingLines animations until the
// hover has gone through

// Want to pass something to the LoadingLines such that
// it has access to information on whether or not it's been clicked
//
// Should it be clicked, it should 
class LoadingLinesMainDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
		};

		this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
	}

	handleOnMouseOver() {
		this.setState({
			clicked: true,
		});
	}

	// pass this.state.clicked to LoadingLines
	render() {
		return (
			<LoadingLines
				onMouseOver={this.handleOnMouseOver}
				clicked={this.state.clicked}>
			</LoadingLines>
		);
	}
}

export default {
  title: 'LoadingLines',
  mainDemo: LoadingLinesMainDemo,
};
