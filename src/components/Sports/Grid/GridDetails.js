import React from "react";
import "./GridDetails.css";
import OGP from "../OGP";
import { MdKeyboardArrowRight } from "react-icons/md";

const GridDetails = () => {
  return (
    <div className="grid-market-details">
      <OGP />
      <div className="grid-market-total">
        8 Markets
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default GridDetails;
