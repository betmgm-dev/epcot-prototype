import React from 'react'
import '../styles/TopEvents.css'
import { MdKeyboardArrowDown } from 'react-icons/md'

const TopEvents = () => {
  return (
    <div className="event-card">
      <div className="card-header">Top Events</div>
      <div className="event-info">
        <div className="event-logo-circle">
          <img src="https://scmedia.itsfogo.com/$-$/af9ac94629df4941b9404c5281a8f769.svg" alt="UFC" className="event-logo" />
        </div>
        <div className="market-info">
          <span className="market-name">UFC 268: Usman vs. Covington 2<img src="https://scmedia.itsfogo.com/$-$/29a8419a851a4863bb6673c2aa879e06.svg" alt="" className="top-event-highlight"/></span>
          <span className="market-details">16 Markets &middot; 1 boost</span>  
        </div>
        <MdKeyboardArrowDown />
      </div>
      <div className="event-info">
        <div className="event-logo-circle">
          <img src="https://scmedia.itsfogo.com/$-$/85c521d46ebf4086b0772421fab3074a.svg" alt="US Open" className="event-logo" />
        </div>
        <div className="market-info">
          <span className="market-name">US Open<img src="https://scmedia.itsfogo.com/$-$/29a8419a851a4863bb6673c2aa879e06.svg" alt="" className="top-event-highlight"/></span>
          <span className="market-details">24 Markets &middot; 2 boosts</span>  
        </div>
        <MdKeyboardArrowDown />
      </div>
    </div>
  )
}

export default TopEvents