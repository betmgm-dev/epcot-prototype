import React from "react";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-col active d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://scmedia.itsfogo.com/$-$/22dcc73a2bac49cba3a0107239e21360.svg"
          alt=""
        />
        <span>Sports</span>
      </div>
      <div className="bottom-nav-col d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://scmedia.itsfogo.com/$-$/fe2dcaf3369c4eaa8d5700043c16ea1c.svg"
          alt=""
        />
        <span>Casino</span>
      </div>
      <div className="bottom-nav-col d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://scmedia.itsfogo.com/$-$/5ad37b3c3a2b49c38302a0380ba80c66.svg"
          alt=""
        />
        <span>Promotions</span>
      </div>
      <div className="bottom-nav-col d-flex flex-column justify-content-between align-items-center">
        <span className="bottom-nav-account-total">$64.33</span>
        <span>Account</span>
      </div>
    </div>
  );
};

export default BottomNav;
