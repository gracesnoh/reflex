import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import githubLogo from '../../images/github.png';
import reflexLogo from '../../images/reflex-logo.png';

import './NavigationBar.css';

// TODO Make media queries into global styles
const size = {
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
}

export const device = {
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};

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
    visibility: hidden;
  }
`;

const Right = styled.div`
  grid-template-columns: 1fr 1fr;
  font-size: 14px;
  color: #979797;
  display: flex;
  align-items: center;
`;

const NavItem = styled.a`
  margin: 18px;
  text-align: center;

  @media ${device.mobileL} {
    visibility: hidden;
  }
`;

const GithubLogo = styled.img`
  width: 16px;
  height: auto;
  margin-right: 6px;
  vertical-align: middle;

  @media ${device.mobileL} {
    visibility: hidden;
  }
`;

//TODO: Change to Pure Component?
export default class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Left href="">
            <ReflexLogo src={reflexLogo} alt="reflex-logo"/>
            <Title>Reflex Motion</Title>
          </Left>
          <Right>
            <NavItem href="">Getting Started</NavItem>
            <NavItem href="https://github.com/gracesnoh/reflex" target="_blank" rel="noopener noreferrer">
              <GithubLogo src={githubLogo} alt="github-logo"/>View on Github
            </NavItem>
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
