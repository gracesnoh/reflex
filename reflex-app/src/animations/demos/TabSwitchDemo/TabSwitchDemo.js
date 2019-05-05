import React, {Component} from 'react';
import TabSwitch from '../../TabSwitch';
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
        <Button> Products </Button>
        <Button> Stories </Button>
        <Button> About Us</Button>
      </TabSwitch>
    )
  }
}

export default {
  title: 'Tab Switch',
  mainDemo: TabSwitchDemo,
}
