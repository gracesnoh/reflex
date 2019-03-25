import React, { Component } from 'react';
import styled from 'styled-components';
import lottie from "lottie-web";
import { Link } from 'react-scroll';
import ScrollingColorBackground from 'react-scrolling-color-background';
import arrow from './images/arrow-line.svg';

import animations from '../../animations';
import AnimationCard from '../../components/AnimationCard';
import * as animationData from '../../animations/LandingBG/data.json';

const renderAnimationCard = ({ title, render, detailTitle }, key) => {
  return (
    <AnimationCard key={key} title={title} detailTitle={detailTitle}>
      {render}
    </AnimationCard>
  );
};

const Wrapper = styled.div`
  margin: auto;
  max-width: 80vw;
  padding: 18px;
  height: 100%;
`;

const LandingContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column wrap;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 500;
  color: #7567F7; //CONSTANT
  margin: 24px 0;
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #FF52EE; //CONSTANT
  margin-bottom: 48px;
  line-height: 1.5;
  width: 36vw;
`;

const CTA = styled.button`
  max-width: 180px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  background-color: #FF52EE; //CONSTANT
  border: none;
  border-radius: 3px;
`;

const AnimationContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const ScrollButton = styled.button`
  background: none;
  border: none;
  color: #7567F7;
  font-weight: 600;
  font-size: 14px;
  margin-top: 60px;
  padding: 0;
  cursor: pointer;
`;

const Arrow = styled.img`
  transform: rotate(180deg);
  width: 24px;
  vertical-align: middle;
  cursor: pointer;
`;

const Animation = styled.div`
  position: absolute;
  min-height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
`;

const colorTransitionStyle = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  bottom: '0px',
  right: '0px',
  zIndex: '-1',
};

//TODO: Change to Pure Component?
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.landingTopSectionRef = React.createRef();
    this.createAnimation = this.createAnimation.bind(this);
  }

  createAnimation() {
   const animationParams = {
     container: this.landingTopSectionRef.current,
     loop: true,
     autoplay: true,
     animationData: animationData,
     ...this.props.animationParams,
    };

    const animation = lottie.loadAnimation(animationParams);
    return animation;
  }

  componentDidMount() {
    this.animation = this.createAnimation();
  }

  render() {
    return (
      <Wrapper id="bgtest">
        <ScrollingColorBackground
            selector='.js-color-stop[data-background-color]'
            colorDataAttribute='data-background-color'
            initialRgb='white'
            style={colorTransitionStyle}/>
        <Animation ref={this.landingTopSectionRef}></Animation>
        <LandingContainer
          data-background-color='white'
          className='js-color-stop'
          >
          <section style={{ height: '20px'}} data-background-color='rgb(234, 77, 237)'  className='js-color-stop' />
          <Title> Reflex </Title>
          <Subtitle>
            Reflex motion is an animation library based in React that mirrors real-world, natural
            motion.
          </Subtitle>
          <CTA>Get npm package</CTA>
          <Link smooth="easeOutCubic" duration={1000} to="animationsCont" >
            <ScrollButton>Scroll down to see animations</ScrollButton>
            <Arrow src={arrow}></Arrow>
          </Link>
        </LandingContainer>
        <AnimationContainer data-background-color='rgba(117,103,247,.25)'  className='js-color-stop' id="animationsCont">
          {animations.map((animation, index) => renderAnimationCard(animation, index))}
        </AnimationContainer>
      </Wrapper>
    );
  }
}
