import React from 'react';

import FormInput from '../../FormInput';
import checkCircle from './check-circle-line.svg';

const FormInputSuccessDemo = hover => (
  <FormInput>
    <FormInput.Label>Email</FormInput.Label>
    <FormInput.Image isComplete={hover} onSuccess={hover} src={checkCircle} />
    <FormInput.Input isComplete={hover} onSuccess={hover} value="johndoe@email.com" disabled/>
  </FormInput>
);

export default {
  title: 'Form Input Success',
  render: FormInputSuccessDemo,
  detailTitle: 'FormValidations',
};
