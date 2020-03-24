import React, { PureComponent } from 'react';
import { ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, Line, Legend, Area } from 'recharts';

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text fontSize={8} x={0} y={0} dy={3} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

export default class Chart extends PureComponent {
  render() {
    return (
      <div style={{backgroundColor: '#fff'}}>
        <ResponsiveContainer width='95%' height={700}>
          <ComposedChart
            layout='vertical'
            data={this.props.songs}
            margin={{
              top: 15, right: 20, left: 150, bottom: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" height={80}/>
            <YAxis type="category" dataKey="name" interval={0} tick={<CustomizedAxisTick />} textAnchor="end"/>
            <Tooltip />
            <Legend />
            {this.props.showArea ? <Area dataKey={this.props.selectedData} type='monotone' fill='#2BDE6A'  /> : null}
            {this.props.showBars ? <Bar dataKey={this.props.selectedData} barSize={6} fill='#2BDE6A' /> : null}
            {this.props.showMonotone ? <Line dot={false} type='monotone' dataKey={this.props.selectedData} stroke='#ff0000'/> : null}
            {this.props.showBasis ? <Line dot={false} type='basis' dataKey={this.props.selectedData} stroke='#000'/> : null}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
