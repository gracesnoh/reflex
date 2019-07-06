import styled from 'styled-components';

import Input from './Input.js';
import Label from './Label.js';

const Checkbox = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Checkbox.Input = Input;
Checkbox.Label = Label;

export default Checkbox;