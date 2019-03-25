import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import githubLogo from './images/github.png';
import reflexLogo from './images/reflex-logo.png';
import reflexLogoWhite from './images/reflex-logo-white.png';
import hamburger from './images/bars-line.svg';

// TODO Make media queries into global styles
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

const mobileSlideDown = keyframes`
  0% {
    transform: translateY(-100);
  }

  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80vw;
  height: 60px;
  grid-area: nav;
  margin: auto;

  @media ${device.tablet} {
    max-width: 100vw;
  }
`;

const Left = styled.a`
  display: flex;
  align-items: center;
  padding-left: 18px;
`;

const ReflexLogo = styled.img`
  width: 24px;
  height: auto;
  margin-right: 12px;
`;

const Right = styled.div`
  grid-template-columns: 1fr 1fr;
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
    padding: 12px;
  }
`;

const Hamburger = styled.img`
  width: 16px;
  height: auto;
  visibility: hidden;

  @media ${device.mobileL} {
    visibility: visible;
  }

`;

const NavItem = styled.a`
  padding: 12px 15px;
  text-align: center;
  // color: ${props => props.theme.purple};
  color: #7567F7;
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;

  :hover {
    background-color: rgba(117,103,247,.15)
  }

  @media ${device.mobileL} {
    display: none;
  }

  ${props => props.mobileMenu && `
    animation: ${mobileSlideDown} 0.5s ease-in-out forwards;
  `}
`;

const GithubLogo = styled.img`
  width: 16px;
  height: auto;
  margin: -1px 6px 0 0;
  vertical-align: middle;

  @media ${device.mobileL} {
    display: none;
  }
`;

// //TODO: Change to Pure Component?
export default class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      showMobileMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: window.innerWidth <= 462});
  }

  renderDesktopRight() { 
    return (
      <Fragment>
        <NavItem href="">Getting Started</NavItem>
        <NavItem href="https://github.com/gracesnoh/reflex" target="_blank" rel="noopener noreferrer">
          <GithubLogo src={githubLogo} alt="github-logo"/>View on Github
        </NavItem>
      </Fragment>
    );
  }

  renderMobileRight = () => {
    return (
      <Hamburger onClick={() => {}} src={hamburger} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Nav>
          <Left href="">
            <ReflexLogo src={reflexLogo} alt="reflex-logo"/>
          </Left>
          <Right>
            {this.state.isMobile ? this.renderMobileRight() : this.renderDesktopRight() }
          </Right>
        </Nav>
      </Container>
    );
  }
}