import React from "react";
import "./MarqueeCardEvent.css";
import LionsBoost from "../../Badges/LionsBoost";

const MarqueeCardEvent = () => {
  return (
    <div className="marquee-card marquee-card-event">
      <div className="marquee-card-header d-flex justify-content-between">
        <LionsBoost />
        <span className="marquee-event-comp">NFL</span>
      </div>
      <p className="marquee-card-body">Dak Prescott to throw 2 touchdowns</p>
      <div className="marquee-card-details d-flex justify-content-between align-items-center">
        <div className="marquee-card-matchup d-flex justify-content-center align-items-center">
          <img
            src="https://scmedia.itsfogo.com/$-$/d6e1c18f6c174ed98b8d93f06608690e.svg"
            alt="Team 1"
          />
          <span>AT</span>
          <img
            src="https://scmedia.itsfogo.com/$-$/35b035939315479e9c04c5271c1f7bde.svg"
            alt="Team 2"
          />
        </div>

        <div className="marquee-card-bet">
          <span>+130</span>
        </div>
      </div>
    </div>
  );
};

export default MarqueeCardEvent;
