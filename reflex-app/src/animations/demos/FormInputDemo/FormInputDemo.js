import React, {Component} from 'react';

import FormInput from '../../FormInput';
import checkCircle from './check-circle-line.svg';
import exclamationCircle from './exclamation-circle-line.svg';

class FormInputMainDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
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
        inputVal: event.target.value,
        isComplete: false
    })
  }


  render() {
    const { inputVal, isEmailValid, isComplete } = this.state;
    return (
        <FormInput>
          <FormInput.Label>{this.props.inputLabel || 'Email Address'}</FormInput.Label>
          <FormInput.Image
            isComplete={isComplete}
            onSuccess={isEmailValid}
            onFailure={!isEmailValid}
            src={isEmailValid ? checkCircle : exclamationCircle }/>
            <FormInput.Input
              type={this.props.inputType || 'email'}
              defaultValue={inputVal}
              isComplete={isComplete}
              onSuccess={isEmailValid}
              onFailure={!isEmailValid}
              onChange={this.handleFormInputOnChange}
              onKeyPress={this.handleFormInputKeyPress}/>
        </FormInput>

    );
  }
}

export default {
  title: 'Form Input',
  mainDemo: FormInputMainDemo,
  examples: FormInputMainDemo,

};
