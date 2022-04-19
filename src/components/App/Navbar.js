import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar d-flex app-wrapper">
      <div className="navbar-wrapper-left d-flex flex-column justify-content-center">
        <div className="d-flex">
          <img
            src="https://scmedia.itsfogo.com/$-$/dd8a7cb174554d9a9c4fe62d70ca1c85.svg"
            className="brand-logo"
            alt="BetMGM"
          />
          <img
            src="https://scmedia.tn.betmgm.com/$-$/e55d80afc28c4e6db0ac856bbff694a4.png"
            className="rg-logo"
            alt="Responsible Gaming"
          />
        </div>
        <span>STATE NAME</span>
      </div>
      <div className="navbar-wrapper-right d-flex">
        <div className="bonus-info btn flex-column">
          <span className="info-title">Bonus</span>
          <span className="info-amount">$1,000</span>
        </div>
        <div className="offers-info btn">
          <span>Offers</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
