import React, { Component } from 'react';
import styled  from 'styled-components';

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
  margin: 0px 120px;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 36px 0px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  margin-bottom: 45px;
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
        <Title> Reflex Motion </Title>
        <Subtitle>
          Reflex motion is an animation library based in React that mirrors real-world, natural
          motion. See our Getting Started page to get started!
        </Subtitle>
        <AnimationContainer>
          {animations.map((animation, index) => renderAnimationCard(animation, index))}
        </AnimationContainer>
      </Wrapper>
    );
  }
}
