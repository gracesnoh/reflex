import React from 'react';
import styled, {css,  keyframes } from 'styled-components';

import Badge from './Badge';
import Image from './Image';

// TODO: This should just specify the size....Why transform?
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

const NotificationBell = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  ${Image} {
    animation: ${props => props.notify && css`${notifyShake} ease-out 0.68s`};
    transform-origin: 50% 0;
    fill: ${props => props.bellColor || '#4f4f4f'};
  }
  
  ${Badge} { 
   animation: ${props =>
     props.notify &&
     css`${badgePopIn} ease-in-out .1s forwards, 
     ${badgeDisappear} ease-in-out .1s 1s forwards;
   `};
   background-color: ${props => props.badgeColor || "#FF5050"};
   border-color: ${props => props.badgeBorderColor || "#ffffff"};
`;

NotificationBell.Image = Image;
NotificationBell.Badge = Badge;

export default NotificationBell;
