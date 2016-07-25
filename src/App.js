import React, { Component } from 'react';
import { drawGroupedBarChart } from './drawGroupedBarChart';
// import { drawScaledGroupedBarChart } from './drawScaledGroupedBarChart';

export default class App extends Component {
  render() {
    return (
      <h1>grouped-bar-example-project</h1>
    );
  }
}

drawGroupedBarChart();
// drawScaledGroupedBarChart();