import React, { PureComponent } from 'react';
import styled from 'styled-components';
import lottie from "lottie-web";
import * as animationData from './data.json' ;

const Button = styled.button`
  background: transparent;
  width: 36px;
  border: none;
  outline: none;
`;

class PlayPause extends PureComponent {
 constructor(props) {
   super(props);
   this.playPauseRef = React.createRef();
   this.animation = null;
   this.state = {isPaused: false};

   this.handleOnClick = this.handleOnClick.bind(this);
   this.createAnimation = this.createAnimation.bind(this);
  }

  handleOnClick() {
   if (this.props.onClick) {
     this.props.onClick();
   }

   this.setState({ isPaused: !this.state.isPaused });

   if (this.state.isPaused) {
    this.animation.setDirection(-1);
   } else { 
    this.animation.setDirection(1);
   }

   this.animation.play(); 
  }

  handleAnimationComplete = (e) => {
    lottie.destroy(this.animation);
  };

  createAnimation() {
   const animationParams = {
     container: this.playPauseRef.current,
     renderer: 'svg',
     autoplay: false,
     animationData: animationData,
     rendererSettings: {
       progressiveLoad: true,
     },
     ...this.props.animationParams,
    };

    const animation = lottie.loadAnimation(animationParams);
    animation.addEventListener('complete', this.handleAnimationComplete);
    return animation;
  }

  componentDidMount() {
    this.animation = this.createAnimation();
  }


  render() {
    return <Button onClick={this.handleOnClick} ref={this.playPauseRef} />;
  }
}

export default PlayPause;