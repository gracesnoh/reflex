import React, {Component} from 'react';

import FormInput from '../../../../../animations/FormInput';
import exclamationCircle from '../../../../../animations/demos/FormInputErrorDemo/exclamation-circle-line.svg';
import checkCircle from '../../../../../animations/demos/FormInputSuccessDemo/check-circle-line.svg';

class FormInputMainDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValid: false,
      isComplete: false,
    };

    this.handleFormInputKeyPress = this.handleFormInputKeyPress.bind(this);
    this.handleFormInputOnChange = this.handleFormInputOnChange.bind(this);
  }

  handleFormInputKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState({
        isEmailValid: event.target.checkValidity(),
        isComplete: true,
      })
    }
  }

  handleFormInputOnChange(event) {
    this.setState({
        email: event.target.value,
        isComplete: false
    })
  }


  render() {
    const { email, isEmailValid, isComplete } = this.state;
    return (
        <FormInput>
          <FormInput.Label>Email Address</FormInput.Label>
          <FormInput.Image
            isComplete={isComplete}
            onSuccess={isEmailValid}
            onFailure={!isEmailValid}
            src={isEmailValid ? checkCircle : exclamationCircle }/>
            <FormInput.Input
              type="email"
              defaultValue={email}
              isComplete={isComplete}
              onSuccess={isEmailValid}
              onFailure={!isEmailValid}
              onChange={this.handleFormInputOnChange}
              onKeyPress={this.handleFormInputKeyPress}/>
        </FormInput>

    );
  }
}

export default FormInputMainDemo;