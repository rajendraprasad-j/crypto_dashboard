import React, { Component } from 'react';
import { headShake } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './myaccount.css';
const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(headShake, 'headShake')
  }
}
class MyAccounts extends Component {
  state={
    activeCard:0
  }
  render() {
    var settings = {
      arrows:false,
      focusOnSelect: true,infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      slidesToScroll: 1
    };
    let self = this;
    let cardsArray = [1,2,3,4].map(function(item,i){
      let activeClass = self.state.activeCard === i ? "active-card":""
      return(
      <div className={"acc_card_main "+activeClass}>
      <div className="acc_name" >Bitflinex</div>
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
        <Slider afterChange={(e)=> this.setState({activeCard:e})} {...settings}>
        {cardsArray}
       
      </Slider>
            </div>
    );
  }
}

export default MyAccounts;
