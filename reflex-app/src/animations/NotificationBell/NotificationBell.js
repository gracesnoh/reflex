import React, { Fragment, Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import bellImg from '../../images/bell-solid.svg';

// TODO: This should just specify the size....Why transform?
// This animation should be on hover for the landing page
// Should click button to animate?

const notifyShake = keyframes`
  15.56% {
    transform: rotate(7deg); }
  31.12% {
    transform: rotate(-6deg); }
  46.68% {
    transform: rotate(5deg); }
  62.24% {
    transform: rotate(-4deg); }
  77.8% {
  
    transform: rotate(3deg); }
  100% {
    transform: rotate(0deg); 
  } 
`;

const badgeDisappear = keyframes`
  100% {
    transform: scale(0);
  }
`;

const badgePopIn = keyframes`
  50% {
    opacity: 1;
    transform: scale(1.2); }
  100% {
    opacity: 1;
    transform: scale(1); }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Image = styled.img`
  transform-origin: 50% 0;
`;

const Badge = styled.div`
  position: absolute;
  opacity: 0;
  top: -1.25px;
  right: -2px;
  width: 14px;
  height: 14px;
  border-radius: 12px;
  border: 3px solid #ffffff;
  background-color: #ee4444;
`;



const Wrapper = styled.div`
  position: relative;
  width: 36px;
  height: 36px;

  ${Image} {
    animation: ${props => props.hover && css`${notifyShake} ease-out 0.68s;`};
  }
  
  ${Badge} { 
   animation: ${props =>
     props.hover &&
     css`${badgePopIn} ease-in-out .1s forwards, 
     ${badgeDisappear} ease-in-out .1s 1s forwards;
   `}
`;

const NotificationBell = hover => (
  <Wrapper hover={hover}>
    <Image src={bellImg} />
    <Badge />
  </Wrapper>
);

// TODO: Is there a better way to do this?
export default {
  title: 'Notification Bell',
  render: NotificationBell
};
