import React, { Component } from 'react';
import './sideBar.css'
class App extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="profilePic">
                <div className="count"><div className='count_number'>8</div></div>
                </div>
                <div className="whiteSpace"></div>
                <div className="icon_group">
                    <div className="speedIcon"></div>
                    <div className="arrowIcon"></div>
                    <div className="settingsIcon"></div>
                </div>
            </div>
        );
    }
}

export default App;
