import React, { Fragment, Component, PureComponent } from 'react';
import FormInput from '../FormInput';
import exclamationCircle from './exclamation-circle-line.svg';

const FormInputErrorDemo = hover => (
  <FormInput>
    <FormInput.Label>Email</FormInput.Label>
    <FormInput.Image onError={hover} src={exclamationCircle} />
    <FormInput.Input onError={hover} />
  </FormInput>
);

export default {
  title: 'Form Input Error',
  render: FormInputErrorDemo
};
