import React from "react";
import "./GridTeam.css";

const GridTeam = (props) => {
  return (
    <div className="grid-team d-flex align-items-center">
      <div className="grid-logo-circle">
        <img src={props.logo} alt="" className="team-logo" />
      </div>
      <div className="team-info d-flex flex-column justify-content-center">
        <span className="team-name">{props.name}</span>
        <span className="team-details">{props.record}</span>
      </div>
    </div>
  );
};

export default GridTeam;
