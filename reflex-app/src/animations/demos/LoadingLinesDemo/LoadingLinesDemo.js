import React, { Component } from 'react';

import LoadingLines from '../../LoadingLines'

class LoadingExamples extends Component {
  render() {
    return (
      <LoadingLines></LoadingLines>
    )
  }
}

export default {
  title: 'LoadingLines',
  mainDemo: LoadingLines,
  examples: LoadingExamples
};
