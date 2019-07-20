import React, {Component} from 'react';
import styled from 'styled-components';

const size = {
  mobileL: '462px',
}

export const device = {
  mobileL: `(max-width: ${size.mobileL})`,
};

const Wrapper = styled.div`
  margin: auto;
  max-width: 80vw;
  padding: 18px;
  overflow: hidden;
  height: 100vh;

  @media ${device.mobileL} {
    max-width: 100vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  height: 100%;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #FF52EE;
  margin-bottom: 36px;
  line-height: 1.5;
`;

const Text = styled.span`
font-size: 14px;
font-weight: 500;
color: #4F4F4F;
line-height: 1.5;
margin-bottom: 24px;
`;

const CTAcontainer = styled.div`
  position: relative;
  margin-bottom: 48px;
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
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  
  &:hover {
    transform: translate(-1px, -1px);
  }

  &:active {
    transform: translate(3px, 3px);
  }
`;

const CTAshadow = styled.div`
  position: absolute;
  width: 150px;
  height: 37px;
  background-color: #C8ADC0;
  border-radius: 3px;
  top: 3px;
  left: 3px;
  z-index: -1;
`;

const Snippet = styled.div`
  background-color: rgba(117,103,247,.10);
  border: 1px solid #7567F7;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: 12px 18px;
  margin-bottom: 24px;
`;

const Code = styled.code`
  font-family: 'Inconsolata', monospace;
  font-size: 14px;
  font-weight: 700;
  color: #7567F7;
`;

class GettingStarted extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>Getting Started</Title>
          <Text>
            Start by downloading our npm package.
          </Text>
          <Snippet>
            <Code>npm install reflex-motion</Code>
          </Snippet>
          <CTAcontainer>
            <CTA>Get npm package</CTA><CTAshadow></CTAshadow>
          </CTAcontainer>
          <Text>
            Once installed, you can choose the animations you would like to use by importing and adding them to your project.
          </Text>
          <Snippet>
            <Code language-html>
              import Starburst from 'reflex-motion';
              <br/><br/><br/>
            </Code>
          </Snippet>
        </Container>
      </Wrapper>
    )
  }

}

export default GettingStarted;