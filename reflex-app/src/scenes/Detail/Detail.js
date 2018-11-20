import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  max-width: 80vw;
  margin: auto;
`;

const Back = styled.div`
  font-size: 16px;
  text-transform: normal;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 30px;
  margin: 24px 0;
`;

const Example = styled.div`
  background-color: #F2F2F2;
  border: 1px solid #BDBDBD;
  min-height: 240px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// TODO: Pass in animation as a prop

// class Detail extends React.Component {
//   componentDidMount () {
//     const { match } = this.props.match.params
//     const { child } = this.props.location.state
//   }
//   render () {
//     <Wrapper>
//       <Link to="/">
//         <Back>Back to all animations</Back>
//       </Link>
//       <Title>{match.params.animationTitle}</Title>
//       <Example></Example>
//     </Wrapper>
//   }
// }

function Detail({ match }) {
  return (
    <Wrapper>
      <Link to="/">
        <Back>Back to all animations</Back>
      </Link>
      <Title>
        {match.params.animationTitle}
      </Title>
      <Example>
        <span>hi</span>
      </Example>
    </Wrapper>
  )
}

export default Detail; 