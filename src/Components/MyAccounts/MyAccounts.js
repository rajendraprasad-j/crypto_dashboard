import React, { Component } from 'react';
import { headShake } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import './myaccount.css';
const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(headShake, 'headShake')
  }
}
class MyAccounts extends Component {
  render() {
    return (
      <div className="accounts_container">
        <div className="sub_titles">MyAccounts<span></span></div>
        <div className="card_container">
        <StyleRoot>
          <div className="acc_card_main" style={styles.bounce}>
            <div className="acc_name">Bitflinex</div>
            <div className="card_number">1BvB **** **** ****</div>
            <div className ="card_add_details">
              <div>BTC\UTC</div>
              <div className="card_type">Brandon Lucas</div>
            </div>
            <div></div>
            <div></div>
          </div>
          </StyleRoot>
          <div className="acc_card_secondary" style={styles.bounce}>
            <div className="acc_name">Bitflinex</div>
            <div className="card_number">1BvB **** **** ****</div>
            <div className ="card_add_details">
              <div>BTC\UTC</div>
              <div className="card_type">Brandon Lucas</div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="acc_card_secondary" style={styles.bounce}>
            <div className="acc_name">Bitflinex</div>
            <div className="card_number">1BvB **** **** ****</div>
            <div className ="card_add_details">
              <div>BTC\UTC</div>
              <div className="card_type">Brandon Lucas</div>
            </div>
            <div></div>
            <div></div>
          </div>'
        </div>
      </div>
    );
  }
}

export default MyAccounts;
