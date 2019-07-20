import React, { PureComponent } from 'react';
import styled from 'styled-components';
import lottie from "lottie-web";
import * as animationData from './data.json' ;

const Button = styled.button`
  background: transparent;
  width: ${props => props.size || "42px"};
  height: auto;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
`;

class Toggle extends PureComponent {
 constructor(props) {
   super(props);
   this.toggleRef = React.createRef();
   this.animation = null;

   if (props.isToggled) {
     this.state = { isToggled: true }
   } else {
     this.state = { isToggled: false }
   }

   this.handleOnClick = this.handleOnClick.bind(this);
   this.createAnimation = this.createAnimation.bind(this);


  }

  handleOnClick() {
   if (this.props.onClick) {
     this.props.onClick();
   }

   this.setState({ isToggled: !this.state.isToggled });

   if (this.state.isToggled) {
    this.animation.setDirection(-1);
   } else { 
    this.animation.setDirection(1);
   }

   this.animation.play(); 
  }

  createAnimation() {
   const animationParams = {
     container: this.toggleRef.current,
     renderer: 'svg',
     autoplay: false,
     animationData: animationData.default,
     // rendererSettings: {
     //   progressiveLoad: true,
     // },
     ...this.props.animationParams,
    };

    const animation = lottie.loadAnimation(animationParams);
    return animation;
  }

  componentDidMount() {
    this.animation = this.createAnimation();
    if (this.state.isToggled) {
      // Couldn't find any other way to start at the last animation
      this.animation.goToAndStop(this.animation.firstFrame + this.animation.totalFrames-1, true);
    }
  }


  render() {
    return <Button onClick={this.handleOnClick} ref={this.toggleRef} size={this.props.size} />;
  }
}

export default Toggle;