import React, { Component } from 'react';
import SideBar from '../SideBar/sideBar'
import Header from '../Header/header'
import Balance from '../Balance/Balance';
import MyAcconts from '../MyAccounts/MyAccounts'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideBar/>
      <div className="body">
        <Header />
        <div className="secondary">
        <Balance />
        <MyAcconts />
      </div>
      </div>
      
      </div>
    );
  }
}

export default App;
