import React from 'react';

import FormInput from '../FormInput';
import exclamationCircle from './exclamation-circle-line.svg';

const FormInputErrorDemo = hover => (
  <FormInput>
    <FormInput.Label>Email</FormInput.Label>
    <FormInput.Image onFail={hover} src={exclamationCircle} />
    <FormInput.Input onFail={hover} value="johndoe" disabled/>
  </FormInput>
);

export default {
  title: 'Form Input Error',
  render: FormInputErrorDemo,
  detailTitle: 'FormValidations',
};
