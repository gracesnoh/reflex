import React, { Component } from 'react';

import Toggle from '../../Toggle'

class ToggleDemo extends Component {
  constructor(props) {
    super(props);
    this.toggleRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.hover) {
      this.toggleRef.current.handleOnClick()
    }
  }

  render() {
    return (
      <Toggle ref={this.toggleRef}/>
    );
  }
}

export default {
  title: 'Toggle',
  mainDemo: ToggleDemo,
  codePen: ""
};