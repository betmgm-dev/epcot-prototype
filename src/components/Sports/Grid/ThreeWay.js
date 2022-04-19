import React from "react";
import "./ThreeWay.css";

const ThreeWay = (props) => {
  return (
    <div className="grid-lines">
      <div className="grid-spread">
        <span className="market-line">{props.spread}</span>
        <span className="market-odds">{props.spreadOdds}</span>
      </div>
      <div className="grid-total">
        <span className="market-line">{props.total}</span>
        <span className="market-odds">{props.totalOdds}</span>
      </div>
      <div className="grid-moneyline">
        <span className="market-odds">{props.moneylineOdds}</span>
      </div>
    </div>
  );
};

export default ThreeWay;
