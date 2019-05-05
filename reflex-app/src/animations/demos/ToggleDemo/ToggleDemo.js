import React, { Component } from 'react';

import Toggle from '../../Toggle'
import styled from "styled-components";

class ToggleDemo extends Component {
  constructor(props) {
    super(props);
    this.toggleRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.hover) {
      this.toggleRef.current.handleOnClick()
    }
  }

  render() {
    return (
      <Toggle ref={this.toggleRef}/>
    );
  }
}

const ExamplesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

const ExampleContainer = styled.div.attrs({
  style: ({ background }) => ({ background: background})
})`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 230px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin-bottom: 18px;
`;

const Header = styled.div.attrs({
  style: ({ background }) => ({ background: background})
})`
  width: 290px;
  height: 60px;
  border-radius: 3px;
  
`;

const SettingRowContainer = styled.div.attrs({
  style: ({ background }) => ({ background: background})
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  height: 48px;
  margin-top: 1px;
`;

const SettingRowText = styled.div`
  padding-left: 24px;
`;


const SettingRow= (background, text, isToggled) => (
  <SettingRowContainer background={background}>
    <SettingRowText>
      {text}
    </SettingRowText>
    <div>
      <Toggle isToggled={isToggled}/>
    </div>
  </SettingRowContainer>
)

const HeaderText = styled.div.attrs({
  style: ({ color }) => ({ color: color })
})`
  padding-left: 24px;
  padding-top: 18px;
  color: #4F4F4F;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;


const InputTitle = styled.h3`
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  color: white;
  margin-left: 24px;
`;

const Input = styled.input`
  width: 240px;
  height: 33px;
  margin-top: 6px;
  margin-left: 24px;
  margin-bottom: 12px;
  padding: 0.5em;
  font-size: 14px;
  line-height: 24px;
  color: white;
  background: #3F3B3B;
  border: none;
  border-radius: 3px;
`;

const ToggleText = styled.h3`
  font-size: 11px;
  line-height: 10px;
  color: white;
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
`

class ToggleExamples extends Component {
  render() {
    return (
      <ExamplesContainer>
        <ExampleContainer background={'#FAFAFA'} >
          <Header>
            <HeaderText color={'#4F4F4F'}>Settings</HeaderText>
          </Header>
          {SettingRow('#FFFFFF','Allow Notifications', true)}
          {SettingRow('#FFFFFF','Do Not Disturb')}
          {SettingRow('#FFFFFF','Multi-factor authentication', true)}
        </ExampleContainer>
        <ExampleContainer background={'#4F4F4F'} >
          <Header>
            <HeaderText color={'#FFFFFF'}>Sign in</HeaderText>
          </Header>
          <InputTitle>Username</InputTitle>
          <Input defaultValue="graysnowww" type="text" />
          <InputTitle>Password</InputTitle>
          <Input defaultValue="*******" type="password" />
          <ToggleContainer>
            <ToggleText>Remember me</ToggleText>
            <div><Toggle isToggled={true} /></div>
          </ToggleContainer>



        </ExampleContainer>
      </ExamplesContainer>
    );
  }
}


export default {
  title: 'Toggle',
  mainDemo: ToggleDemo,
  examples: ToggleExamples
};