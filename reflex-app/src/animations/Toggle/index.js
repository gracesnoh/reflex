import React, { PureComponent } from 'react';
import styled from 'styled-components';
import lottie from "lottie-web";
import * as animationData from './data.json' ;

const Button = styled.button`
  background: transparent;
  width: 54px;
  border: none;
  outline: none;
`;

class Toggle extends PureComponent {
 constructor(props) {
   super(props);
   this.toggleRef = React.createRef();
   this.animation = null;
   this.state = {isToggled: false};

   this.toggleSwitch = this.toggleSwitch.bind(this);
   this.createAnimation = this.createAnimation.bind(this);
  }

  toggleSwitch() {
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

  handleAnimationComplete = (e) => {
    lottie.destroy(this.animation);
  };

  createAnimation() {
   const animationParams = {
     container: this.toggleRef.current,
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
    return <Button onClick={this.toggleSwitch} ref={this.toggleRef} />;
  }
}

export default Toggle;