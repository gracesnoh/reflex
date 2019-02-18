import React, { Component } from 'react';
import styled from 'styled-components';
import lottie from "lottie-web";
import { Link } from 'react-scroll';
import ScrollingColorBackground from 'react-scrolling-color-background'

import animations from '../../animations';
import AnimationCard from '../../components/AnimationCard/AnimationCard';
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
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-template-rows: repeat(4, 270px);
  grid-gap: 1em;
`;

const ScrollButton = styled.button`` // TODO: Syyle me please

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
        <LandingContainer
          data-background-color='white'
          className='js-color-stop'
          ref={this.landingTopSectionRef}>
          <section style={{ height: '20px'}} data-background-color='rgb(234, 77, 237)'  className='js-color-stop' />
          <Title> Reflex </Title>
          <Subtitle>
            Reflex motion is an animation library based in React that mirrors real-world, natural
            motion.
          </Subtitle>
          <CTA>Get npm package</CTA>
          <Link smooth="easeOutCubic" duration={1000} to="animationsCont" >
            <ScrollButton>Scroll down to see animations /insert arrow here</ScrollButton>
          </Link>
        </LandingContainer>
        <AnimationContainer data-background-color='rgba(117,103,247,.25)'  className='js-color-stop' id="animationsCont">
          I need to be styled :(
          {animations.map((animation, index) => renderAnimationCard(animation, index))}
        </AnimationContainer>
      </Wrapper>
    );
  }
}
