import React, { Component } from 'react';
import styled from 'styled-components';
import { FBLineIcon, TWLineIcon, MDLineIcon, IGLineIcon } from '../../SocialLineIcons';
// import TWLineIcon from '../../SocialLineIcons';
// import MDLineIcon from '../../SocialLineIcons';
// import IGLineIcon from '../../SocialLineIcons';

const Demo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 6px;
`;

class SocialLineIconsDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Demo>
        <FBLineIcon/>
        <TWLineIcon/>
        <MDLineIcon/>
        <IGLineIcon/>
      </Demo>
    );
  }
}

class SocialLineIconsExamples extends Component {
  render() {
    return (
      <div>Sup</div>
    );
  }
}

export default {
  title: 'Social Line Icons',
  mainDemo: SocialLineIconsDemo,
  examples: SocialLineIconsExamples
};