import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  width: 50%;
  min-height: 360px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 60px;
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

const CodepenButton = styled.button`
  background-color: #FB5BED;
  color: white;margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #FB5BED;
  font-weight: bold;
  margin: 0em;
  margin-top: 1.5em;
  border-radius: 3px;
  height: 3em;
  font-size: 0.9em;
`;

const Link = styled.a`
  color: white;
`

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
    const { title, mainDemo, codePen, onHover } = this.props;

    return (
      <Card id={title}>
        <Title id={title}>{title}</Title>
        {onHover ?
          <Preview
            id={title}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          >{mainDemo(this.state.hover)}</Preview>
          :
          <Preview>{React.createElement(mainDemo)}</Preview>}
        <CodepenButton>
          <Link href={codePen}> Open in CodePen </Link>
        </CodepenButton>
      </Card>
    );
  }
}