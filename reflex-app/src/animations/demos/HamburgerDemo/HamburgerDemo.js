import React, { Component, Fragment } from 'react';
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

const size = {
  mobileL: '462px',
  tablet: '768px',
  laptop: '1024px',
}

export const device = {
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};

const ExamplesContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: start;
`;

const Grid = styled.div`
  display: flex;
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
  margin-right: 12px;
`;

const Feed = styled.div`
  position: relative;
  background-color: #F2F2F2;
  margin-bottom: 18px;
  border-radius: 3px;
  height: 230px;
  width: 250px;
  padding: 18px 24px;
  overflow: hidden;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Date = styled.span`
  margin-top: 12px;
  font-size: 10px;
`;

const Skeleton = styled.img`
  width: 202px;
  height: auto;
  margin-top: 12px;
`;

const HamburgerWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 2;
`

const HeaderContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

class HamburgerExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    }; 

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }
  render() {
    return (
      <ExamplesContainer>
        <Feed>
          <HamburgerWrapper>
            <Hamburger width="40px" open={this.state.isMenuOpen} onClick={this.handleOnClick}/>
          </HamburgerWrapper>
          <Menu open={this.state.isMenuOpen}></Menu>
          <HeaderContainer>
            <Title>Good Morning!</Title>
            <Date>Sunday, May 5</Date>
          </HeaderContainer>
          <Skeleton src={feedPlaceholder}/>
          <Skeleton src={feedPlaceholder}/>
        </Feed>

        <Grid>
          <HamburgerBox background={'#FFFFFF'}>
            <Hamburger/>
          </HamburgerBox>
          <HamburgerBox background={'#4F4F4F'}>
            <Hamburger color="white"/>
          </HamburgerBox>
          <HamburgerBox background={'#111111'}>
            <Hamburger color="white"/>
          </HamburgerBox>
        </Grid>
      </ExamplesContainer>
    );
  }
}

const MobileMenu = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: ${props => props.open ? 0 : '600px'};
  transition: top 500ms ease-in-out 500ms;
  left: 0;
  padding: 24px;
`;

const Item = styled.div`
  height: 36px;
  cursor: default;
`;

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  render() {
    return (
      <Fragment>
        <MobileMenu open={this.state.open}>
          <Item>Home</Item>
          <Item>Profile</Item>
          <Item>Messages</Item>
          <Item>Settings</Item>
        </MobileMenu>
      </Fragment>
    )
  }
}

export default {
  title: 'Hamburger',
  mainDemo: HamburgerDemo,
  examples: HamburgerExamples,
};