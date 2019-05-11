import React, {Component, Fragment} from 'react';
import styled from "styled-components";
import NotificationBell from '../../NotificationBell'

class NotificationBellMainDemo extends Component {
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
      <Fragment>
        <NotificationBell
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
          notify={notify}>
          <NotificationBell.Image />
          <NotificationBell.Badge />
        </NotificationBell>
      </Fragment>
    )
  }
}

const ExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
`;

const Example = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  height: 42px;
  margin-bottom: 18px;
`;

class NotificationExamples extends Component {
  render() {
    return (
      <ExamplesContainer>
        <Example>
         
        </Example>
        <Example></Example>
      </ExamplesContainer>
    );
  }
}

export default {
  title: 'Notification Bell',
  mainDemo: NotificationBellMainDemo,
  examples: NotificationExamples
};