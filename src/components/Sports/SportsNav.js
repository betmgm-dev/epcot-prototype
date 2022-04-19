import React from "react";
import "./SportsNav.css";
import { BsFillRecordFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import SportsNavPill from "./SportsNavPill";

const SportsNav = () => {
  const competition = [
    {
      logo: "https://scmedia.itsfogo.com/$-$/0f4942ec6f5341f5898199ae5472abf2.svg",
      name: "NFL",
    },
    {
      logo: "https://scmedia.nj.betmgm.com/$-$/ffc877a8c1ab49d195218b9efac48c98.svg",
      name: "NBA",
    },
    {
      logo: "https://scmedia.nj.betmgm.com/$-$/ff7f6e64a0284beba35d9d87d9a1289e.svg",
      name: "MLS",
    },
    {
      logo: "https://scmedia.itsfogo.com/$-$/076abdaa04144717904bffd9c3fa894c.svg",
      name: "MLB",
    },
  ];
  return (
    <div className="sports-nav d-flex align-items-center">
      <div className="btn btn-live btn-tertiary">
        <IconContext.Provider
          value={{
            color: "#D45050",
            height: "14px",
            width: "14px",
            style: { marginRight: "4px" },
          }}
        >
          <BsFillRecordFill />
        </IconContext.Provider>
        <span>Live</span>
        <div className="live-ticker d-flex justify-content-center align-items-center">
          <span>12</span>
        </div>
      </div>
      <SportsNavPill logo={competition[0].logo} name={competition[0].name} />
      <SportsNavPill logo={competition[1].logo} name={competition[1].name} />
      <SportsNavPill logo={competition[2].logo} name={competition[2].name} />
      <SportsNavPill logo={competition[3].logo} name={competition[3].name} />
    </div>
  );
};

export default SportsNav;
