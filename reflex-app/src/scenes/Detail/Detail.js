import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  
`;

function displayTitle({ match }) {
  return (
    <h2>
      {match.params.animationTitle}
    </h2>
  )
}

const Detail = styled.div`
  display: block;
`;

export default displayTitle; 