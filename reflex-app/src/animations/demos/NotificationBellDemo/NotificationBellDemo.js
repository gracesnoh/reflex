import React, {Component, Fragment} from 'react';
import styled from "styled-components";
import NotificationBell from '../../NotificationBell'

class NotificationBellDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: false,
    };

    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
  };

  handleOnMouseOver() {
    this.setState({
      notify:true,
    })
  }

  handleOnMouseOut() {
    this.setState({
      notify:false,
    })
  }

  render() {
    const {notify} = this.state;

    return (
      <NotificationBell
        onMouseOver={this.handleOnMouseOver}
        onMouseOut={this.handleOnMouseOut}
        onPress={this.handleOnMouseOver}
        notify={notify}
        bellColor={this.props.bellColor}
        badgeColor={this.props.badgeColor}
        badgeBorderColor={this.props.badgeBorderColor}>
        <NotificationBell.Image />
        <NotificationBell.Badge />
      </NotificationBell>
    )
  }
}

const ExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
`;

const Example = styled.div`
  background-color: #3F3B3B;
  border-radius: 3px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 18px;
  padding: 18px;
  display: flex;
  justify-content: flex-end;
`;

const ExampleLight = styled(Example)`
  background-color: #ffffff;
  justify-content: flex-start;
  flex-flow: column;
`;

const Group = styled.div`
  display: flex;
  align-items: center;

  p {
    padding-left: 12px;
  }
`;

const Icon = styled.svg`
  fill: #4f4f4f;
  width: 24px;
  height: 24px;
`;

const IconWhite = styled(Icon)`
  fill: #CCCCCC;
  margin-right: 6px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-right: 18px;
  border-right: 1px solid #4f4f4f;
  color: #CCCCCC;
`;

const Notifications = styled.div`
  padding-left: 18px;
`;

class NotificationExamples extends Component {
  render() {
    return (
      <ExamplesContainer>
        <Example>
          <Profile>
            <IconWhite viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
              <title>user-line</title>
              <path d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z" class="clr-i-solid clr-i-solid-path-1"></path><circle cx="18" cy="10" r="7" class="clr-i-solid clr-i-solid-path-2"></circle>
            </IconWhite>
            <span>John Doe</span>
          </Profile>
          <Notifications>
            <NotificationBellDemo bellColor="#CCCCCC" badgeBorderColor="#3F3B3B"></NotificationBellDemo>
          </Notifications>
        </Example>
        <ExampleLight>
          <Group>
            <NotificationBellDemo></NotificationBellDemo>
            <p>Alerts</p>
          </Group>
          <Group>
            <Icon viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
              <title>folder-open-solid</title>
              <path class="clr-i-solid clr-i-solid-path-1" d="M35.32,13.74A1.71,1.71,0,0,0,33.87,13H11.17a2.59,2.59,0,0,0-2.25,1.52,1,1,0,0,0,0,.14L6,25V7h6.49l2.61,3.59a1,1,0,0,0,.81.41H32a2,2,0,0,0-2-2H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29.69A1.37,1.37,0,0,0,5.41,31H30.34a1,1,0,0,0,1-.72l4.19-15.1A1.64,1.64,0,0,0,35.32,13.74Z"></path>
            </Icon>
            <p>Folders</p>
          </Group>
          <Group>
            <Icon viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
              <title>phone-handset-solid</title>
              <path class="clr-i-solid clr-i-solid-path-1" d="M15.22,20.64a20.37,20.37,0,0,0,7.4,4.79l3.77-3a.67.67,0,0,1,.76,0l7,4.51a2,2,0,0,1,.33,3.18l-3.28,3.24a4,4,0,0,1-3.63,1.07,35.09,35.09,0,0,1-17.15-9A33.79,33.79,0,0,1,1.15,8.6a3.78,3.78,0,0,1,1.1-3.55l3.4-3.28a2,2,0,0,1,3.12.32L13.43,9a.63.63,0,0,1,0,.75l-3.07,3.69A19.75,19.75,0,0,0,15.22,20.64Z"></path>
            </Icon>
            <p>Contacts</p>
          </Group>
        </ExampleLight>
      </ExamplesContainer>
    );
  }
}

export default {
  title: 'Notification Bell',
  mainDemo: NotificationBellDemo,
  examples: NotificationExamples
};