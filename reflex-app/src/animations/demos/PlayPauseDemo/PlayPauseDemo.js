import React, { Component } from 'react';
import styled from 'styled-components';
import PlayPause from '../../PlayPause';
import exampleVideo from './images/forest-drone-footage.mov';

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

const ExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Player = styled.div`
  width: 372px;
  height: 36px;
  background-color: #F2F2F2;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-size: 10px;
`;

const StyledPlayPause = styled(PlayPause)`
  border: 20px solid red;
`;

const Tracker = styled.div`
  width: 270px;
  height: 1px;
  background-color: rgba(79,79,79,0.3);
  margin: 0 12px;
  text-align: right;
`;

const Progress = styled.div`
  width: 120px;
  height: 1px;
  background-color: #4F4F4F;
`;

const VideoPlayerContainer = styled.div`
  margin-top: 24px;
`;

const VideoPlayer = styled.video`
  width: 372px;
  height: 210px;
  background-color: black;
  border-radius: 3px;
`;

const VideoControls = styled.div``;

class PlayPauseExamples extends Component {
  render() {
    return (
      <ExamplesContainer>
        <Player>
          <StyledPlayPause/>
          <Tracker>
            <Progress></Progress>
          </Tracker>
          3:03
        </Player>
        <VideoPlayerContainer>
          <VideoPlayer controls>
            <source src={exampleVideo}></source>
          </VideoPlayer>
        </VideoPlayerContainer>
      </ExamplesContainer>
    )
  }
}

export default {
  title: 'Play Pause',
  mainDemo: PlayPauseDemo,
  examples: PlayPauseExamples
};