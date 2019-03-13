import React, { PureComponent } from 'react';
import styled from 'styled-components';
import lottie from "lottie-web";
import * as animationData from './starburst.json' ;

const Button = styled.button`
  background: transparent;
  width: 60px;
  height: 60px;
  border: none;
`;

class Starburst extends PureComponent {
 constructor(props) {
   super(props);
   this.starburstRef = React.createRef();
   this.animation = null;
   this.state = {isStarred: false};

   this.handleOnClick = this.handleOnClick.bind(this);
   this.createAnimation = this.createAnimation.bind(this);
  }

  handleOnClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
 
    this.setState({ isStarred: !this.state.isStarred });
 
    if (this.state.isStarred) {
      this.animation.goToAndStop(0);
    } else { 
      this.animation.play(); 
    }

  }

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
    return animation;
  }

  componentDidMount() {
    this.animation = this.createAnimation();
  }

  render() {
    return <Button onClick={this.handleOnClick} ref={this.starburstRef} />;
  }
}

export default Starburst;