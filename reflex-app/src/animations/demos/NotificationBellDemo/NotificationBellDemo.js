import React from 'react';

import NotificationBell from '../../NotificationBell'

const NotificationBellDemo = hover => (
  <NotificationBell notify={hover}>
    <NotificationBell.Image />
    <NotificationBell.Badge />
  </NotificationBell>
);

export default {
  title: 'Notification Bell',
  render: NotificationBellDemo,
  detailTitle: 'NotificationBell'
};