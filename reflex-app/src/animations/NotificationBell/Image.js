import styled  from 'styled-components';

import bellImg from './bell-solid.svg';

const Image = styled.img.attrs({
  src: props => props.src || bellImg,
})`
  transform-origin: 50% 0;
  width: 30px;
`;

export default Image;