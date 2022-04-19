import React from "react";
import "./MarqueeCardPromo.css";

const MarqueeCardPromo = () => {
  return (
    <div className="marquee-card marquee-card-promo">
      <div className="marquee-promo-info d-flex flex-column">
        <span className="marquee-promo-header">FIRST BET</span>
        <span className="marquee-promo-body">
          FREE BET MATCH
          <br />
          UP TO $1,000
        </span>
      </div>
      <div className="btn btn-md btn-primary">
        <span>Button</span>
      </div>
    </div>
  );
};

export default MarqueeCardPromo;
