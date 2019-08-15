import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  background-color: #FF52EE; //CONSTANT
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  justify-content: center;
  margin-top: 18px;

  &:hover {
    transform: translate(-1px, -1px);
  }

  &:active {
    transform: translate(3px, 3px);
  }
`;

const Shadow = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 37px;
  background-color: rgba(30,30,30,.30);
  border-radius: 3px;
  top: 3px;
  left: 3px;
  z-index: -1;
`;

class OpenCodeButton extends Component {
  render() {
    return(
      <Container>
        <Button>Open in CodePen</Button><Shadow></Shadow>
      </Container>
    );
  }
}

export default OpenCodeButton;