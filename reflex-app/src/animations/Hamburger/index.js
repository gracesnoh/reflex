import React, { PureComponent } from 'react';
import styled from 'styled-components';
import lottie from "lottie-web";
import * as animationData from './data.json' ;

const Button = styled.button`
  background: transparent;
  width: 54px;
  border: none;
  cursor: pointer;
`;

class Hamburger extends PureComponent {
 constructor(props) {
   super(props);
   this.burgerRef = React.createRef();
   this.animation = null;
   this.state = {isBurger: false};

   this.handleOnClick = this.handleOnClick.bind(this);
   this.createAnimation = this.createAnimation.bind(this);
  }

  handleOnClick() {
   if (this.props.onClick) {
     this.props.onClick();
   }

   this.setState({ isBurger: !this.state.isBurger });

   if (this.state.isBurger) {
    this.animation.setDirection(-1);
   } else { 
    this.animation.setDirection(1);
   }

   this.animation.play(); 
  }

  createAnimation() {
   const animationParams = {
     container: this.burgerRef.current,
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
    return <Button onClick={this.handleOnClick} ref={this.burgerRef} />;
  }
}

export default Hamburger;