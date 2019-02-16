import React, { Component } from 'react';
import styled from 'styled-components';

import animations from '../../animations';
import AnimationCard from '../../components/AnimationCard/AnimationCard';

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

const Landing = styled.div`
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


//TODO: Change to Pure Component?
export default class Home extends Component {

  isTop(e) {
    return e.getBoundingClientRect().top <= window.innerHeight;
  }
  
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('animationsCont');
    const backgroundTest = document.getElementById('bgtest');
    var mystyle = document.createElement('style');
    mystyle.type = 'text/css';
    mystyle.innerHTML = '.cssClass { margin: 0; }';
    if (this.isTop(wrappedElement)) {
      backgroundTest.classList.add("mystyle")
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  render() {
    return (
      <Wrapper id="bgtest">
        <Landing>
          <Title> Reflex </Title>
          <Subtitle>
            Reflex motion is an animation library based in React that mirrors real-world, natural
            motion.
          </Subtitle>
          <CTA>Get npm package</CTA>
        </Landing>
        <AnimationContainer id="animationsCont">
          {animations.map((animation, index) => renderAnimationCard(animation, index))}
        </AnimationContainer>
      </Wrapper>
    );
  }
}
