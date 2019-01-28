import React, { PureComponent } from 'react';
import lottie from "lottie-web";
import * as animationData from './starburst.json' ;

class Starburst extends PureComponent {
 constructor(props) {
   super(props);
   this.starburstRef = React.createRef();
   this.animation = null;

   this.handleOnClick = this.handleOnClick.bind(this);
   this.createAnimation = this.createAnimation.bind(this);
  }

  handleOnClick() {
   this.animation.play();

   if (this.props.onClick) {
     this.props.onClick();
   }
  }

  handleAnimationComplete = (e) => {
    // Do not use the .destroy method.
    // It deletes the ref DOM element entirely.
    // lottie.destroy(this.animation);
    this.animation.goToAndStop(0, false);
  };

  createAnimation() {
   const animationParams = {
     container: this.starburstRef.current,
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
    return <button onClick={this.handleOnClick} ref={this.starburstRef}> test</button>;
  }
}

export default Starburst;