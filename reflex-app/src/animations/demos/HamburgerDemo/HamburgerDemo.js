import React, { Component } from 'react';

import Hamburger from '../../Hamburger'

class HamburgerDemo extends Component {
  constructor(props) {
    super(props);
    this.burgerRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.hover) {
      this.burgerRef.current.handleOnClick()
    }
  }

  render() {
    return (
      <Hamburger ref={this.burgerRef}/>
    );
  }
}

export default {
  title: 'Hamburger',
  render: (hover) => <HamburgerDemo hover={hover}/>,
  detailTitle: 'Hamburger'
};