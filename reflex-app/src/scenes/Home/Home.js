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
  margin: 120px auto;
  max-width: 80vw;
  padding: 18px;

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
  render() {
    return (
      <Wrapper>
        <Title> Reflex </Title>
        <Subtitle>
          Reflex motion is an animation library based in React that mirrors real-world, natural
          motion.
        </Subtitle>
        <CTA>Get npm package</CTA>
        <AnimationContainer>
          {animations.map((animation, index) => renderAnimationCard(animation, index))}
        </AnimationContainer>
      </Wrapper>
    );
  }
}
