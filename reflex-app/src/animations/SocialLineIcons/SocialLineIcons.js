import React from 'react';
import styled, { keyframes, css } from 'styled-components';


const traceFacebook = keyframes`
  0% {
    stroke-dashoffset: 200;
  }
  75% {
    stroke-dashoffset: 0;
    fill: rgba(66,102,178,0.3);
  }
  100% {
    stroke-dashoffset: 0;
    fill: #4266b2;
  }
`

const traceTwitter = keyframes`
  0% {
    stroke-dashoffset: 300;
  }
  75% {
    stroke-dashoffset: 0;
    fill: rgba(29,161,242,0.3);
  }
  100% {
    stroke-dashoffset: 0;
    fill: #1DA1F2;
  }
`

const traceMedium = keyframes`
  0% {
    stroke-dashoffset: 400;
  }
  75% {
    stroke-dashoffset: 0;
    fill: rgba(0,0,0,0.3);
  }
  100% {
    stroke-dashoffset: 0;
    fill: black;
  }
`

const traceInstagramCircle = keyframes`
  0% {
    fill: url(#grad2);
  }
  100% {
    fill: url(#grad1);
  }
`

const traceInstagramDash = keyframes`
  0% {
    stroke-dashoffset: 200;
  }
  100% {
    stroke-dashoffset: 0;
  }
`

const Wrapper = styled.div`
  position: relative;
`

const Facebook = styled.svg`
  width: 24px;
  height: 30px;
  stroke: #4266b2;
  stroke-width: 1.5;
  fill: rgba(66,102,178,0.3);
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  margin-right: 6px;

  animation: ${props => props.hover && css`${traceFacebook} 0.5s ease-in-out forwards`};
`;

const Twitter = styled.svg`
  width: 24px;
  height: 30px;
  stroke: #1DA1F2;
  stroke-width: 1.5;
  fill: rgba(29,161,242,0.3);
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  margin-right: 6px;

  animation: ${props => props.hover && css`${traceTwitter} 0.5s ease-in-out forwards`};
`;

const Medium = styled.svg`
  width: 24px;
  height: 30px;
  stroke: black;
  stroke-width: 1.5;
  fill: rgba(0,0,0,0.3);
  stroke-dasharray: 400;
  stroke-dashoffset: 400;

  animation: ${props => props.hover && css`${traceMedium} 0.5s ease-in-out forwards`};
`;

const Instagram = styled.svg`
  width: 24px;
  height: 30px;
  stroke: black;
  stroke-width: 1.5;
  fill: rgba(0,0,0,0.3);
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  
  ${({hover}) => hover && css`
    cursor: pointer;
  `};
`;

const InstagramLight = styled.path`
  fill: url(#grad2);
`;


const InstagramOuterStroke = styled.path`
  stroke: url(#grad1);
  stroke-width: 5;
  fill: none;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;

  animation: ${({hover}) => hover && css`
    ${traceInstagramDash} 0.3s ease-in-out forwards;
  `};
`;

const InstagramInnerStroke = styled.circle`
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  stroke: url(#grad1);
  stroke-width: 5;
  fill: none;

  animation: ${({hover}) => hover && css`
    ${traceInstagramDash} 0.3s 0.2s ease-in-out forwards;
  `};
`;

const InstagramCenterCircle = styled.circle`
  fill: url(#grad2);

  animation: ${({hover}) => hover && css`
    ${traceInstagramCircle} 0.2s 0.3s ease-in-out forwards;
  `};
`;

const SocialLineIcons = hover => (
  <Wrapper>
    <Facebook hover={hover} viewBox="0 0 60 70">
      <path d="M23.5,60V33.2h-9V22.5h9v-8.4C23.5,5,29.1,0,37.2,0c3.9,0,7.3,0.3,8.2,0.4V10h-5.6c-4.4,0-5.3,2.1-5.3,5.2v7.3
      h10l-1.4,10.7h-8.6V60H23.5z"/>
    </Facebook>
    <Twitter hover={hover} viewBox="0 0 60 70">
      <path d="M19,54.1c22.4,0,34.7-18.6,34.7-34.7c0-0.5,0-1.1,0-1.6c2.4-1.7,4.4-3.9,6.1-6.3c-2.2,1-4.6,1.6-7,1.9
      c2.5-1.5,4.4-3.9,5.4-6.7c-2.4,1.4-5,2.4-7.7,3C45.7,4.8,38,4.6,33.1,9.2c-3.2,3-4.5,7.4-3.5,11.6c-9.8-0.5-18.9-5.1-25.1-12.7
      c-3.2,5.6-1.6,12.7,3.8,16.3c-1.9-0.1-3.8-0.6-5.5-1.5c0,0,0,0.1,0,0.2c0,5.8,4.1,10.8,9.8,11.9c-1.8,0.5-3.7,0.6-5.5,0.2
      c1.6,5,6.2,8.4,11.4,8.5C14,47,8.7,48.8,3.2,48.8c-1,0-1.9-0.1-2.9-0.2C5.9,52.2,12.4,54.1,19,54.1"/>
    </Twitter>
    <Medium hover={hover} viewBox="0 0 60 70">
      <path d="M7.7,16.3c0.1-0.7-0.2-1.4-0.7-1.9L1.6,7.8v-1h16.9l13.1,28.7L43.1,6.8h16.1v1l-4.7,4.5
        c-0.4,0.3-0.6,0.8-0.5,1.3v32.8c-0.1,0.5,0.1,1,0.5,1.3l4.5,4.5v1H36.2v-1l4.7-4.6c0.5-0.5,0.5-0.6,0.5-1.3V19.8L28.3,53.1h-1.8
        L11.2,19.8v22.3c-0.1,0.9,0.2,1.9,0.8,2.6l6.1,7.4v1H0.8v-1L7,44.6C7.6,44,7.9,43,7.7,42.1V16.3z"/>
    </Medium>
    <Instagram hover={hover} viewBox="0 0 60 70">
     <defs>
       <radialGradient id="grad1" cx="33%" cy="33%" r="100%" fx="0%" fy="0%">
          <stop offset="4%" style={{stopColor:'#FED373',stopOpacity:'1'}}/>
          <stop offset="30%" style={{stopColor:'#F15245',stopOpacity:'1'}}/>
          <stop offset="62%" style={{stopColor:'#D92E7F',stopOpacity:'1'}}/>
          <stop offset="85%" style={{stopColor:'#9B36B7',stopOpacity:'1'}}/>
          <stop offset="100%" style={{stopColor: '#515ECF',stopOpacity:'1'}}/>
      </radialGradient>
      <radialGradient id="grad2" cx="33%" cy="33%" r="100%" fx="0%" fy="0%">
         <stop offset="4%" style={{stopColor:'#FED373',stopOpacity:'.3'}}/>
         <stop offset="30%" style={{stopColor:'#F15245',stopOpacity:'.3'}}/>
         <stop offset="62%" style={{stopColor:'#D92E7F',stopOpacity:'.3'}}/>
         <stop offset="85%" style={{stopColor:'#9B36B7',stopOpacity:'.3'}}/>
         <stop offset="100%" style={{stopColor: '#515ECF',stopOpacity:'.3'}}/>
     </radialGradient>
   </defs>
    <InstagramLight d="M41.5,57.7H18.6c-9,0-16.2-7.3-16.2-16.2V18.6c0-9,7.3-16.2,16.2-16.2h22.9c9,0,16.2,7.3,16.2,16.2v22.9
    	C57.7,50.4,50.4,57.7,41.5,57.7z M18.6,7.3c-6.2,0-11.2,5-11.2,11.2v22.9c0,6.2,5,11.2,11.2,11.2h22.9c6.2,0,11.2-5,11.2-11.2V18.6
    	c0-6.2-5-11.2-11.2-11.2H18.6z"/>
    <InstagramLight d="M30,44.1c-7.8,0-14.1-6.3-14.1-14.1S22.2,15.9,30,15.9S44.1,22.2,44.1,30S37.8,44.1,30,44.1z M30,20.9
c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1s9.1-4.1,9.1-9.1S35,20.9,30,20.9z"/>
    <InstagramOuterStroke hover={hover} d="M41.5,55.2H18.6C11,55.2,4.8,49,4.8,41.4V18.6C4.8,11,11,4.8,18.6,4.8h22.9c7.6,0,13.7,6.2,13.7,13.7v22.9C55.2,49,49.1,55.2,41.5,55.2z"/>
    <InstagramInnerStroke hover={hover} cx="30" cy="30" r="11.6"/>
    <InstagramCenterCircle hover={hover} cx="44.7" cy="15.2" r="3.3"/>
    </Instagram>
  </Wrapper>
);

export default {
  title: 'Social Line Icons',
  mainDemo: SocialLineIcons,
  onHover: true,
};
