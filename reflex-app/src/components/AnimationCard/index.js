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

const DemosContainer = styled.div`
  display:flex;
  flex-direction: row;
`

const ExamplesHeader = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-bottom: 12px;
`

const ExamplesContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

const MainDemo = styled.div`
  display: flex;
  width: 400px;
  height: 350px;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-right: 24px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,.25);
`;

//TODO: Should this be in scenes/Home since it's used there?
export default class AnimationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  static propTypes = {
    title: PropTypes.string.isRequired
    // Children should be explicit props, or named something else
  };

  render() {
    const { isActive, title, mainDemo, onHover, examples} = this.props;
    return (
      <Card id={title} isActive={isActive}>
        <Title id={title}>{title}</Title>
        <DemosContainer>
          {onHover ?
          <MainDemo
            id={title}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          >{mainDemo(this.state.hover)}</MainDemo>
          :
          <MainDemo>{React.createElement(mainDemo)}</MainDemo>}
          <ExamplesContainer>
            <ExamplesHeader>Examples</ExamplesHeader>
            <div>
              {React.createElement(examples)}
            </div>
          </ExamplesContainer>
        </DemosContainer>
      </Card>
    );
  }
}