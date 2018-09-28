import React, { Fragment, Component, PureComponent } from 'react';

import FormInput from '../FormInput';
import checkCircle from './check-circle-line.svg';

const FormInputSuccessDemo = hover => (
  <FormInput>
    <FormInput.Label>Email</FormInput.Label>
    <FormInput.Image onSuccess={hover} src={checkCircle} />
    <FormInput.Input onSuccess={hover} />
  </FormInput>
);

export default {
  title: 'Form Input Success',
  render: FormInputSuccessDemo
};
