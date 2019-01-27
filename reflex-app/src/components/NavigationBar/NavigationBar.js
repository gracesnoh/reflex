import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import githubLogo from './images/github.png';
import reflexLogo from './images/reflex-logo.png';
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
//

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
  box-shadow: 0 3px 8px rgba(130, 130, 130, .25);
  background-color: #FAFAFA;
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
  margin-left: 18px;
`;

const ReflexLogo = styled.img`
  width: 24px;
  height: auto;
  margin-right: 12px;
`;

const Title = styled.div`
  margin-right: auto;
  padding-left: 6px;
  font-weight: 400;
  font-size: 16px;

  @media ${device.mobileL} {
    display: none;
  }
`;

const Right = styled.div`
  grid-template-columns: 1fr 1fr;
  font-size: 14px;
  color: #979797;
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

  ${props => props.clicked && `
    width: 24px;
  `}
`;

const NavItem = styled.a`
  margin: 18px;
  text-align: center;
  color: ${props => props.theme.purple};

  // @media ${device.mobileL} {
  //   display: none;
  // }

  ${props => props.mobileMenu && `
    animation: ${mobileSlideDown} 0.5s ease-in-out forwards;

  `}
`;

const GithubLogo = styled.img`
  width: 16px;
  height: auto;
  margin-right: 6px;
  vertical-align: middle;

  @media ${device.mobileL} {
    display: none;
  }
`;

// const NavigationBar = click => (
//   <Container>
//   <Nav>
//     <Left href="">
//       <ReflexLogo src={reflexLogo} alt="reflex-logo"/>
//       <Title>Reflex Motion</Title>
//     </Left>
//     <Right>
//       <NavItem href="">Getting Started</NavItem>
//       <NavItem href="https://github.com/gracesnoh/reflex" target="_blank" rel="noopener noreferrer">
//         <GithubLogo src={githubLogo} alt="github-logo"/>View on Github
//       </NavItem>
//       <Hamburger src={hamburger} />
//     </Right>
//   </Nav>
// </Container>
// );

// export default {
//   title: 'Navigation Bar',
//   render: NavigationBar
// };


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
    console.log(window.innerWidth);
    this.setState({isMobile: window.innerWidth <= 425});
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
            <Title>Reflex Motion</Title>
          </Left>
          <Right>
            {this.state.isMobile ? this.renderMobileRight() : this.renderDesktopRight() }
          </Right>
        </Nav>
      </Container>
    );
  }
}


// // TODO: Change me to styled components
// function NavigationBar() {
//   return (
//     <div className="nav__container">
//       <div className="nav">
//         <a className="nav__left" href="">
//           <div className="logo">
//             <img src={reflexLogo} alt="reflex-logo" />
//           </div>
//           <span className="title">Reflex Motion</span>
//         </a>
//         <div className="nav__right">
//           <a className="nav__item" href="">
//             <span>Getting Started</span>
//           </a>
//           <a
//             className="nav__item"
//             href="https://github.com/gracesnoh/reflex"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src={githubLogo} alt="github-logo" />
//             <span>View on Github</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavigationBar;
