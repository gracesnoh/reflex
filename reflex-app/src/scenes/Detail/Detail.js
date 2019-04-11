import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FormInput from './FormInput';
import NotificationBell from './NotificationBell'
import LoadingLines from './LoadingLines'
import Starburst from './Starburst'
import Checkbox from './Checkbox'
import Toggle from './Toggle'
import Hamburger from './Hamburger'

const animationDetails = {
  // title: json object
  'FormValidations': FormInput,
  'NotificationBell': NotificationBell,
  'LoadingLines': LoadingLines,
  'Starburst': Starburst,
  'Checkbox': Checkbox,
  'Toggle': Toggle,
  'Hamburger': Hamburger
};


const Wrapper = styled.div`
  max-width: 80vw;
  margin: auto;
`;

const Back = styled.div`
  font-size: 16px;
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

const Detail = ({ match }) => {
  const animationTitle = match.params.animationTitle;
  const {detailTitle, mainDemo, inspiration} = animationDetails[animationTitle];

  return (
    <Wrapper>
      <Link to="/">
        <Back>Back to all animations</Back>
      </Link>
      <Title>
        {detailTitle}
      </Title>
      <Example>
        {React.createElement(mainDemo)}
      </Example>
      {inspiration}
    </Wrapper>
  )
}

export default Detail; 