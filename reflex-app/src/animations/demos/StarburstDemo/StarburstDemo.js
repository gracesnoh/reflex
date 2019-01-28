import React, { Component } from 'react';

import Starburst from '../../Starburst'

class StarburstDemo extends Component {
  constructor(props) {
    super(props);
    this.starburstRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.hover) {
      this.starburstRef.current.handleOnClick()
    }
  }

  render() {
    return (
      <Starburst ref={this.starburstRef}/>
    );
  }
}

export default {
  title: 'Starburst',
  render: (hover) => <StarburstDemo hover={hover}/>,
  detailTitle: 'Starburst'
};