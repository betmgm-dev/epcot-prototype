import React from "react";
import "./SportsMenu.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";

const SportsMenu = () => {
  return (
    <div className="sports-menu d-flex app-wrapper">
      <div className="sports-competition-menu d-flex align-items-center">
        <GiHamburgerMenu />
        <span>Sports</span>
      </div>
      <div className="search-bar d-flex align-items-center">
        <BiSearchAlt />
        <span>Search</span>
      </div>
    </div>
  );
};

export default SportsMenu;
