import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';
import { connect } from 'react-redux';

import './Balance.css'

const Chartdata = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
class Balance extends Component {
  render() {
    let {currrentAccount ,data} = this.props
    let curentData = data.accounts[currrentAccount];
    return (
      <div className = "balance_container">
          <div className="sub_titles">Balance</div>
          <div className="readings_container">
            <div className="readings">
                <div className="btc_text">{curentData.balance.name} <span className="btc_value">{curentData.balance.value}</span></div>
                <div className="btc_text">{curentData.balance.subvalue} <span className="value_green">{curentData.balance.valuePer}</span></div>
            </div>
            <div className="readings display_flex">
              <div className="options_box">
                <div className="up_arrow"></div>
                <span className="options_box_text">Sell</span>
              </div>
              <div className="options_box">
                <div className="down_arrow"></div>
                <span className="options_box_text">Buy</span>
              </div>
              <div className="options_box">
                <div className="order"></div>
                <span className="options_box_text">Order</span>
              </div>
            </div>
            <div className="readings">
              <div className="btc_text">Your today revenue</div>
              <div className="revenue_text">+ $ <span className="revenue_text_value">{curentData.balance.revenue}</span></div>
              <LineChart width={70} height={40} data={Chartdata}>
                 <Line type='monotone' dataKey='pv' dot={false} stroke='#4CAF50' strokeWidth={1} />
              </LineChart>
              <span className="graph_text">1.06 %</span>
            </div>
            <div className="readings">
              <div className="btc_text">Current order volume</div>
              <div className="revenue_text"> $ <span className="revenue_text_value">{curentData.balance.current_order_volume}</span></div>
              <LineChart width={70} height={40} data={Chartdata}>
                 <Line type='monotone' dataKey='pv'dot={false} stroke='#4CAF50' strokeWidth={1} />
              </LineChart>
              <span className="graph_text">1.06 %</span>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { dashBoardReducers } = state
  const { currrentAccount ,data} = dashBoardReducers;
  return { currrentAccount ,data }
}
export default connect(mapStateToProps)(Balance);
