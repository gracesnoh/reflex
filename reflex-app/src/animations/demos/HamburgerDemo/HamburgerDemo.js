import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Hamburger from '../../Hamburger';
import feedPlaceholder from './images/feed-placeholder.png';

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
  grid-template-columns: 1fr 1fr;
  align-items: start;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 12px;
`;

const HamburgerBox = styled.div.attrs({
  style: ({ background }) => ({ background: background})
})`
  width: 60px;
  height: 60px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  align-items: center; 
  justify-content: center;
  position: relative;
`;

const Feed = styled.div`
  background-color: #F2F2F2;
  margin-left: 18px;
  border-radius: 3px;
  height: 230px;
  width: 250px;
  padding: 18px 24px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 10px;
`;

const Skeleton = styled.img`
  width: 202px;
  height: auto;
  margin-top: 12px;
`;

const Menu = styled.div`
  background: white;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  animation: {()}
`;

class HamburgerExamples extends Component {
  constructor() {
    super(props);
    this.state = {
      isMenuExpanded = false
    }; 

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.setState({
      isMenuExpanded: !isMenuExpanded
    })
  }
  render() {
    return (
      <ExamplesContainer>
        <Grid>
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
        </Grid>
        <Feed>
          <Hamburger onClick={this.handleOnClick}/>
          <Title>Good Morning!</Title>
          <Date>Sunday, May 5</Date>
          <Skeleton src={feedPlaceholder}/>
          <Skeleton src={feedPlaceholder}/>
          <Menu isToggled={this.state.isMenuExpanded}></Menu>
        </Feed>
      </ExamplesContainer>
    );
  }
}

export default {
  title: 'Hamburger',
  mainDemo: HamburgerDemo,
  examples: HamburgerExamples,
};