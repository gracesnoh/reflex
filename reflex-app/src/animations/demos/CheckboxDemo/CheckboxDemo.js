import React, {Component} from 'react';
import styled from 'styled-components';
import Checkbox from '../../Checkbox/index';

class CheckboxMainDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  };

  handleOnClick() {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  }

  render() {
    const {isChecked} = this.state;

    return (
      <Checkbox onClick={this.handleOnClick}>
        <Checkbox.Input id="input"/>
        <Checkbox.Label isChecked={isChecked} backgroundColor="#7567F7">
          <svg
            className="checkbox-svg"
            version="1.1"
            id="check"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 16 16"
          >
            <polyline id="check-line" className="st0" points="2.1,7.6 6.2,11.5 13.9,3.7 " />
          </svg>
        </Checkbox.Label>
      </Checkbox>
    )
  }
}

const List = styled.div`
  display: flex;
  background-color: white;
  width: 290px;
  border-radius: 3px;
  padding: 12px 18px;
  margin-bottom: 18px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);  
`;

const Title = styled.h4``;

const CheckboxItem = styled.div`

`;

class CheckboxExamples extends Component {
  render() {
    return (
      <List>
        <Title>Todo List</Title>
        <CheckboxItem>
<<<<<<< HEAD
          <CheckboxMainDemo></CheckboxMainDemo>
=======
          <Checkbox></Checkbox>
>>>>>>> started checkbox demos
          Write Jeff's birthday card
        </CheckboxItem>
      </List>
    )
  }
}

export default {
  title: 'Checkbox',
  mainDemo: CheckboxMainDemo,
  examples: CheckboxExamples,
};