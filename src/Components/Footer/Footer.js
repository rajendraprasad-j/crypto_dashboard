import React, { Component } from 'react';
import SideBar from '../SideBar/sideBar'
import Header from '../Header/header'
import Balance from '../Balance/Balance';
import MyAcconts from '../MyAccounts/MyAccounts'
import Charts from '../Charts/Charts'
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div></div>
        <div className="footer-but"><div className="footer-img"></div></div>
      </div>
    );
  }
}

export default Footer;
