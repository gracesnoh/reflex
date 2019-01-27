// TODO: Consider removing all base 'comopentns' into a ReactComponents folder
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Image from './Image';
import Label from './Label';
import Input from './Input';

const FormInput = styled.div`
  position: relative;
`;

// There should be some way of inporting all of the props for these components b default rathern than hand e.g. placeholder, etc.
FormInput.Image = Image;
FormInput.Label = Label;
FormInput.Input = Input;
export default FormInput;
