import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

import { Input } from 'antd';

export default class SupplyChart extends React.Component {
  state = {
    useCanvas: false
  };
  render() {
    const status = 'good'
    const key = 1
    return (
      <div className="supply-chart" id={`supply-chart${key}`}>
        <h1>Sample Dataset</h1>
        <div className="supply-chart__content">
          <p className="supply-chart__status">Status: <span className={`supply-chart__status--${status}`}>Good</span></p>
          <div>
            <Input
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={value => console.log(value)}
            />
          </div>
        </div>
        <XYPlot
          xType="time"
          width={800}
          height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />
          <LineSeries
            color='orange'
            data={[
              { x: new Date('01/01/2018'), y: 75 },
              { x: new Date('01/14/2018'), y: 60 },
              { x: new Date('04/18/2018'), y: 80 },
              { x: new Date('05/15/2018'), y: 90 }
            ]} />
          <LineSeries
            color='blue'
            data={[
              { x: new Date('04/18/2018'), y: 80 },
              { x: new Date('05/15/2018'), y: 90 }
            ]} />
        </XYPlot>
      </div>
    );
  }
}