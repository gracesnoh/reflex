import React, { Component } from 'react';

import PlayPause from '../../PlayPause'

class PlayPauseDemo extends Component {
  constructor(props) {
    super(props);
    this.playPauseRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.hover) {
      this.playPauseRef.current.handleOnClick()
    }
  }

  render() {
    return (
      <PlayPause ref={this.playPauseRef}/>
    );
  }
}

export default {
  title: 'Play Pause',
  render: (hover) => <PlayPauseDemo hover={hover}/>,
  detailTitle: 'PlayPause'
};