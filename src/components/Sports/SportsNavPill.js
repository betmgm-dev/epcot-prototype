import React from "react";
// import "./SportsNavPill.css";

const SportsNavPill = (props) => {
  return (
    <div className="btn btn-tertiary">
      <img src={props.logo} />
      <span>{props.name}</span>
    </div>
  );
};

export default SportsNavPill;
