import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  width: 50vw;
  min-height: 360px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 60px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

const Preview = styled.div`
  align-self: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
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
    const { title, children, detailTitle} = this.props;
    return (
      <Card>
        <Title>{title}</Title>
        <Preview
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >{children(this.state.hover)}</Preview>
      </Card>
    );
  }
}