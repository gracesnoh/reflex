import React, {Component, Fragment} from 'react';

import NotificationBell from '../../NotificationBell'

class NotificationBellMainDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: false,
    };

    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
  };

  handleOnMouseOver() {
    this.setState({
      notify:true,
    })
  }

  handleOnMouseOut() {
    this.setState({
      notify:false,
    })
  }

  render() {
    const {notify} = this.state;

    return (
      <Fragment>
        <NotificationBell
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
          notify={notify}>
          <NotificationBell.Image />
          <NotificationBell.Badge />
        </NotificationBell>
      </Fragment>
    )
  }
}
export default {
  title: 'Notification Bell',
  mainDemo: NotificationBellMainDemo,
  codePen: ""
};