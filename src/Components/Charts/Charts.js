import React, { Component } from 'react';
import './Chart.css';
import { LineChart, Line, Tooltip, XAxis, CartesianGrid ,YAxis} from 'recharts';
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
class Charts extends Component {
  render() {
    return (
      <div className="chart-container">
        <div className="chart-header">
          <div className="chart-subheading-left">
            <div className="chart-title">Bitcoin Charts</div>
            <div className="chart-subheading">
              <div>
                <svg width={20} height={20}><g><circle r="4" strokeWidth="2" stroke="blue" fill="none" cx={8} cy={8}></circle> </g></svg>
              </div>
              <div className="chart-subheading-text">ETH\USD</div>
            </div>
          </div>
          <div className="chart-subheading-right">
            <button className="button active">Year</button>
            <button className="button">Month</button>
            <button className="button">Week</button>
            <button className="button">Day</button>
          </div>
        </div>
        <div className="chart-view">
        <LineChart width={window.innerWidth - 60} height={200} data={data}>
          <XAxis allowDataOverflow={true} tickCount={1000} mirror={true} tickLine={false} stroke='#E0E0E0' />
          <YAxis tick={<CustomTickText />} padding={{ top: 30 }} axisLine={false} mirror={true} tickLine={false} stroke='#E0E0E0'/>
          <Tooltip active={true} content={<CustomTooltip />} cursor={<CustomizedCursor />} />
          <CartesianGrid vertical={false} stroke="#EEEEEE" />
          <Line type='monotone' dataKey='pv' dot={false} activeDot={<CustomizedDot />} stroke='#8884d8' strokeWidth={2} />
        </LineChart>
        </div>
      </div>
    );
  }
}
class CustomizedCursor extends Component {

  render() {
    return (
      <div className="recharts-tooltip-cursor">
        <line strokeDasharray="5, 5" x1="10" y1="10" x2="190" y2="10" />
      </div>
    );
  }
}
class CustomTooltip extends Component {

  render() {
    return (
      <div className="tooltip">
        <div className="custom-tooltip">
          4 OCT <br />
          <b>$ 989</b>
        </div>
      </div>
    );
  }
}
class CustomTickText extends Component {

  render() {
    const { x,y,payload } = this.props;
    console.log(this.props)
    return (
      <text x={x+5} y={y} stroke='#E0E0E0'>{payload.value}</text>
    );
  }
}
class CustomizedDot extends Component {

  render() {
    let { cx, cy } = this.props;
    console.log(this.props)
    return (
      <g>

        <circle r="8" fill="#FFFFFF" strokeWidth="1" stroke="red" className="recharts-dot" cx={cx} cy={cy}></circle>
        <circle r="4" fill="red" cx={cx} cy={cy}></circle>
      </g>
    );
  }
}
export default Charts;
