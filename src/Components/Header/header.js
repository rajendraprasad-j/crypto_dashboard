import React, { Component } from 'react';


import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="app_bar">
        <div className="left_appbar">
          <div className="navigation_container">
            <div className="navigation_arrow"></div>
          </div>
          <div className="title_container">
            <div className="title_text"> Accounts Overview</div>
          </div>
          </div>
          <div className="right_icons">
            <div className="header_text"> Page style</div>
            <div className="more_apps"></div>
            <div className="more_icon"></div>
            <div className="empty_space"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
