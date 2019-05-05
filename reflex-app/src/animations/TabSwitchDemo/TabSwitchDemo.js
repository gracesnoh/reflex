// TODO: Do this component when the detail page is ready. The animation on home page will be a GIF.
import React, {Component} from 'react';
import TabSwitch from '../TabSwitch';
import styled from "styled-components";

const Button = styled.div`
  border: none;
  outline: none;
  padding: 10px 16px;
`

class TabSwitchDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TabSwitch>
        <Button> This is a test </Button>
        <Button> This is a test </Button>
        <Button> This is a test </Button>
        <Button> This is a test </Button>
        <Button> This is a test </Button>
        <Button> This is a test </Button>
      </TabSwitch>
    )
  }
}

export default {
  title: 'Tab Switch',
  mainDemo: TabSwitchDemo, //TODO: Change this variable name 'test'
}
