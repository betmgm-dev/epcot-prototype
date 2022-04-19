import React from "react";
import "./GridInfo.css";

const GridInfo = () => {
  return (
    <div className="grid-info">
      <span className="event-time">Today &middot; 8:09 PM</span>
      <span className="event-spread">Spread</span>
      <span className="event-total">Total</span>
      <span className="event-moneyline">Money</span>
    </div>
  );
};

export default GridInfo;
