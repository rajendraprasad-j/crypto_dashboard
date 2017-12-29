import React, { Component } from 'react';
import { headShake } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { connect } from 'react-redux';
import { sendMessage } from '../../Actions/dashboardActions'
import "slick-carousel/slick/slick-theme.css";
import './myaccount.css';

class MyAccounts extends Component {

  changeAccaount(i){
    let {dispatch} =this.props;
    dispatch(sendMessage(i));
  }
  render() {
    let {currrentAccount ,data} = this.props
    let settings = {
      arrows:false,
      focusOnSelect: true,infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      slidesToScroll: 1
    };
    let self = this;
    let cardsArray = data.accounts.map(function(item,i){
      let activeClass = currrentAccount === i ? "active-card":""
      return(
      <div key = {i} className={"acc_card_main "+activeClass}>
      <div className="acc_name" >{item.accountDetail.cardName}</div>
      <div className="card_number">1BvB **** **** ****</div>
      <div className ="card_add_details">
        <div>BTC\UTC</div>
        <div className="card_type">Brandon Lucas</div>
      </div>
      </div>)
      
    })
    return (
      <div className="accounts_container">
        <div className="sub_titles_acc">My accounts<span></span></div>
        <Slider afterChange={(e)=> this.changeAccaount(e)} {...settings}>
        {cardsArray}
       
      </Slider>
            </div>
    );
  }
}

function mapStateToProps(state) {
  const { dashBoardReducers } = state
  const { currrentAccount ,data} = dashBoardReducers;
  return { currrentAccount ,data }
}
export default connect(mapStateToProps)(MyAccounts);
