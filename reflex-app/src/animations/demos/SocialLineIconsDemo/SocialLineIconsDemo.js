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

const ExamplesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Example = styled.div`
  width: 290px;
  height: 230px;
  background-color: #EEEEEE;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin-bottom: 18px;
  display: flex;
  align-items: flex-end;
`;

const Footer = styled.div`
  width: 100%;
  height: 85%;
  background-color: #FAFAFA;
  border-radius: 0 0 3px 3px;
  padding: 18px 24px;
  line-height: 2.5;
`;

const Links = styled.div``;

const Social = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 30px);
  grid-gap: 6px;
  margin-top: 12px;
`;

class SocialLineIconsExamples extends Component {
  render() {
    return (
      <ExamplesContainer>
        <Example>
          <Footer>
            <Links>Careers<br/>About<br/>Locations<br/></Links>
            <Social>
              <FBLineIcon/>
              <TWLineIcon/>
              <MDLineIcon/>
              <IGLineIcon/>
            </Social>
          </Footer>
        </Example>
      </ExamplesContainer>
    );
  }
}

export default {
  title: 'Social Line Icons',
  mainDemo: SocialLineIconsDemo,
  examples: SocialLineIconsExamples
};