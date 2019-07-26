import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

import ScrollableAnchor from 'react-scrollable-anchor'
import { useAlert } from 'react-alert'

export default class SupplyChart extends React.Component {
  render() {
    var dictionary = []
    for (var i = 0; i < this.props.indexes; i++) {
      dictionary.push({
        x: this.props.indexes[i],
        y: this.props.values[i]
      })
      console.log({
        x: this.props.indexes[i],
        y: this.props.values[i]
      })
    }
    console.log(dictionary)

    return (
      <div className="supply-chart" id={`supply-chart-${this.props.id}`}>
        <h1>Sample Dataset</h1>
        <div className="supply-chart__content">
          <p className="supply-chart__status">Status: <span className={`supply-chart__status--${this.props.status}`}>{this.props.status.toUpperCase()}</span></p>
        </div>
        <XYPlot
          xType="time"
          width={800}
          height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <LineSeries data={dictionary} />
          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />
        </XYPlot>
      </div>
    );
  }
}