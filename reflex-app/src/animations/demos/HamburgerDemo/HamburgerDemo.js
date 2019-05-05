import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Hamburger from '../../Hamburger'

class HamburgerDemo extends Component {
  constructor(props) {
    super(props);
    this.burgerRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.hover) {
      this.burgerRef.current.handleOnClick()
    }
  }

  render() {
    return (
      <Hamburger ref={this.burgerRef}/>
    );
  }
}

const ExamplesContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 20% 20% 20% 20% 20%;
  `;

const HamburgerBox = styled.div.attrs({
  style: ({ background }) => ({ background: background})
})`
  width: 60px;
  height: 60px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  
`;


class HamburgerExamples extends Component {


  render() {
    return (
      <ExamplesContainer>
        <HamburgerBox background={'#FFFFFF'}>
          <Hamburger/>
        </HamburgerBox>
        <HamburgerBox background={'#4F4F4F'}>
          <Hamburger/>
        </HamburgerBox>
        <HamburgerBox background={'#111111'}>
          <Hamburger/>
        </HamburgerBox>
        <HamburgerBox background={'#FFFFFF'}>
          <Hamburger/>
        </HamburgerBox>
      </ExamplesContainer>
    );
  }
}

export default {
  title: 'Hamburger',
  mainDemo: HamburgerDemo,
  examples: HamburgerExamples,
};