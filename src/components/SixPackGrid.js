import React from 'react'
import '../styles/SixPackGrid.css'
import { MdKeyboardArrowRight } from 'react-icons/md'


const EventGrid = (props) => {
  return (
    <div className="grid-event">
      <div className="grid-market-header">
        <span className="event-time">Today &middot; 8:09 PM</span>
        <span className="event-spread">Spread</span>
        <span className="event-total">Total</span>
        <span className="event-moneyline">Money</span>
      </div>
      <div className="grid-market-team1-container">
        <div className="grid-team1">
          <div className="event-logo-circle">
            <img src={props.logo1} alt="" className="team-logo" />
          </div>
          <div className="team-info">
            <span className="team-name">{props.name1}</span>
            <span className="team-details">{props.record1}</span>  
          </div>
        </div>
        <div className="grid-team-spread">
          <span className="market-line">-1.5</span>
          <span className="market-odds">{props.spread1}</span>
        </div>
        <div className="grid-team-total">
          <span className="market-line">O 9</span>
          <span className="market-odds">{props.total1}</span>
        </div>
        <div className="grid-team-money">
          <span className="market-odds">{props.money1}</span>
        </div>
      </div>
      <div className="grid-market-team2-container">
        <div className="grid-team2">
          <div className="event-logo-circle">
            <img src={props.logo2} alt="" className="team-logo" />
          </div>
          <div className="team-info">
            <span className="team-name">{props.name2}</span>
            <span className="team-details">{props.record2}</span>  
          </div>
        </div>
        <div className="grid-team-spread">
          <span className="market-line">+1.5</span>
          <span className="market-odds">{props.spread2}</span>
        </div>
        <div className="grid-team-total">
          <span className="market-line">U 9</span>
          <span className="market-odds">{props.total2}</span>
        </div>
        <div className="grid-team-money">
          <span className="market-odds">{props.money2}</span>
        </div>
      </div>
      <div className="grid-market-details">
        <div className="ogp-container">ONE GAME PARLAY</div>
        <div className="grid-market-total">
          8 Markets
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  )
}

export default EventGrid