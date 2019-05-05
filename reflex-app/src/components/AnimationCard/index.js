import React, { Component } from 'react';
import styled, {keyframes, css} from 'styled-components';
import PropTypes from 'prop-types';

const scaleUp = keyframes`
  0% { 
    opacity: 0.5;
    transform: scale(1);
    -webkit-transform: scale(1);
   }
  100% { 
    opacity: 1; 
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
`;

const Card = styled.div`
  width: 50%;
  min-height: 360px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 60px;
  opacity: 0.5;
  
  animation: ${({ isActive }) => isActive && 
    css`${scaleUp} .5s forwards;
    `}
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin-bottom: 12px;
`;

const Preview = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,.25);
`;

//TODO: Should this be in scenes/Home since it's used there?
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  static propTypes = {
    title: PropTypes.string.isRequired
    // Children should be explicit props, or named something else
  };

  render() {
    const { isActive, title, mainDemo, onHover} = this.props;
    return (
      <Card id={title} isActive={isActive}>
        <Title id={title}>{title}</Title>
        {onHover ?
          <Preview
            id={title}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          >{mainDemo(this.state.hover)}</Preview>
          :
          <Preview>{React.createElement(mainDemo)}</Preview>}

      </Card>
    );
  }
}