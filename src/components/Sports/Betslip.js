import React from "react";
import "./Betslip.css";

const Betslip = () => {
  return (
    <div className="betslip-container d-flex justify-content-between app-wrapper">
      <div className="betslip-left-wrapper d-flex justify-content-center align-items-center">
        <div className="betslip-total d-flex justify-content-center align-items-center">
          1
        </div>
        <span>Bet Slips</span>
      </div>
      <div className="betslip-right-wrapper">
        <div className="btn btn-tertiary">My Bets</div>
      </div>
    </div>
  );
};

export default Betslip;
