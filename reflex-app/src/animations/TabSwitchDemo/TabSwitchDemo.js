// TODO: Do this component when the detail page is ready. The animation on home page will be a GIF.
import React from 'react';
import TabSwitch from '../TabSwitch';
import styled from "styled-components";

const Button = styled.div`
  border: none;
  outline: none;
  padding: 10px 16px;
`

const test = (
  <TabSwitch>
    <Button> This is a test </Button>
    <Button> This is a test </Button>
    <Button> This is a test </Button>
    <Button> This is a test </Button>
    <Button> This is a test </Button>
    <Button> This is a test </Button>
  </TabSwitch>
)

export default {
  title: 'Tab Switch',
  render: test, //TODO: Change this variable name 'test'
}
