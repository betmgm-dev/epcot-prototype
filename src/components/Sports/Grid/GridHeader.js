import React from "react";
import "./GridHeader.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const GridHeader = (props) => {
  return (
    <div className="widget-header d-flex justify-content-between">
      <div className="composable-title d-flex">
        <img src={props.logo} alt={props.competition} />
        <span>{props.competition}</span>
      </div>
      <div className="all-markets d-flex align-items-center">
        <span>See All</span>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default GridHeader;
