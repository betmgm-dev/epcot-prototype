import React from "react";
// import SixPackGrid from "../SixPackGrid";
import GridHeader from "./Grid/GridHeader";
import GridInfo from "./Grid/GridInfo";
import GridTeam from "./Grid/GridTeam";
import ThreeWay from "./Grid/ThreeWay";
import GridDetails from "./Grid/GridDetails";
import "./ComposableWidget.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Markets = () => {
  const competition = [
    {
      name: "MLB",
      logo: "https://scmedia.itsfogo.com/$-$/076abdaa04144717904bffd9c3fa894c.svg",
    },
    {
      name: "NFL",
      logo: "https://scmedia.itsfogo.com/$-$/0f4942ec6f5341f5898199ae5472abf2.svg",
    },
  ];
  const mlb = [
    {
      name: "Braves",
      logo: "https://scmedia.itsfogo.com/$-$/38a18dee93b04aaabdefc2cf5866d8d6.svg",
      record: "1-0",
      spread: "-1.5",
      total: "O 9",
      spreadOdds: "+155",
      totalOdds: "+100",
      moneylineOdds: "+100",
    },
    {
      name: "Astros",
      logo: "https://scmedia.itsfogo.com/$-$/8a06e2811a7340219f95fe3528f1d91b.svg",
      record: "0-1",
      spread: "+1.5",
      total: "U 9",
      spreadOdds: "-190",
      totalOdds: "-120",
      moneylineOdds: "-120",
    },
  ];
  const nfl = [
    {
      name: "Dolphins",
      logo: "https://scmedia.itsfogo.com/$-$/79a2e47e2401443aad2ec9602d58051c.svg",
      record: "1-6",
      spread: "+14",
      total: "U 48.5",
      spreadOdds: "+110",
      totalOdds: "+110",
      moneylineOdds: "-610",
    },
    {
      name: "Bills",
      logo: "https://scmedia.itsfogo.com/$-$/7d093b2fd77744a9b67ba72ae6dabd91.svg",
      record: "4-2",
      spread: "-14",
      total: "U 48.5",
      spreadOdds: "-110",
      totalOdds: "-110",
      moneylineOdds: "-900",
    },
    {
      name: "Panthers",
      logo: "https://scmedia.itsfogo.com/$-$/96cd6cf6fbf0455fae0bbee210dc2fb8.svg",
      record: "3-4",
      spread: "+3",
      total: "O 46.5",
      spreadOdds: "+110",
      totalOdds: "-114",
      moneylineOdds: "+136",
    },
    {
      name: "Falcons",
      logo: "https://scmedia.itsfogo.com/$-$/fc3df19dc36642ebb36c1196ae4aa437.svg",
      record: "3-3",
      spread: "-3",
      total: "U 46.5",
      spreadOdds: "-110",
      totalOdds: "-106",
      moneylineOdds: "-116",
    },
    {
      name: "Eagles",
      logo: "https://scmedia.itsfogo.com/$-$/8056d757f62244b0aaa53d37c87238e8.svg",
      record: "2-5",
      spread: "-6",
      total: "O 43.5",
      spreadOdds: "+110",
      totalOdds: "-110",
      moneylineOdds: "-198",
    },
    {
      name: "Lions",
      logo: "https://scmedia.itsfogo.com/$-$/6d88c7dc06f04ffda5a98107983d0c09.svg",
      record: "0-7",
      spread: "+6",
      total: "U 43.5",
      spreadOdds: "-110",
      totalOdds: "+110",
      moneylineOdds: "-166",
    },
  ];

  return (
    <div>
      {/* MLB */}
      <div className="composable-widget">
        <GridHeader
          logo={competition[0].logo}
          competition={competition[0].name}
        />
        <div className="widget-body">
          <GridInfo />
          <div className="widget-row">
            <GridTeam
              logo={mlb[0].logo}
              name={mlb[0].name}
              record={mlb[0].record}
            />
            <ThreeWay
              spread={mlb[0].spread}
              total={mlb[0].total}
              spreadOdds={mlb[0].spreadOdds}
              totalOdds={mlb[0].totalOdds}
              moneylineOdds={mlb[0].moneylineOdds}
            />
          </div>
          <div className="widget-row">
            <GridTeam
              logo={mlb[1].logo}
              name={mlb[1].name}
              record={mlb[1].record}
            />
            <ThreeWay
              spread={mlb[1].spread}
              total={mlb[1].total}
              spreadOdds={mlb[1].spreadOdds}
              totalOdds={mlb[1].totalOdds}
              moneylineOdds={mlb[1].moneylineOdds}
            />
          </div>
          <GridDetails />
        </div>
      </div>
      {/* NFL */}
      <div className="composable-widget">
        <GridHeader
          logo={competition[1].logo}
          competition={competition[1].name}
        />
        <div className="widget-body">
          <GridInfo />
          <div className="widget-row">
            <GridTeam
              logo={nfl[0].logo}
              name={nfl[0].name}
              record={nfl[0].record}
            />
            <ThreeWay
              spread={nfl[0].spread}
              total={nfl[0].total}
              spreadOdds={nfl[0].spreadOdds}
              totalOdds={nfl[0].totalOdds}
              moneylineOdds={nfl[0].moneylineOdds}
            />
          </div>
          <div className="widget-row">
            <GridTeam
              logo={nfl[1].logo}
              name={nfl[1].name}
              record={nfl[1].record}
            />
            <ThreeWay
              spread={nfl[1].spread}
              total={nfl[1].total}
              spreadOdds={nfl[1].spreadOdds}
              totalOdds={nfl[1].totalOdds}
              moneylineOdds={nfl[1].moneylineOdds}
            />
          </div>
          <GridDetails />
        </div>
        <div className="widget-body">
          <GridInfo />
          <div className="widget-row">
            <GridTeam
              logo={nfl[2].logo}
              name={nfl[2].name}
              record={nfl[2].record}
            />
            <ThreeWay
              spread={nfl[2].spread}
              total={nfl[2].total}
              spreadOdds={nfl[2].spreadOdds}
              totalOdds={nfl[2].totalOdds}
              moneylineOdds={nfl[2].moneylineOdds}
            />
          </div>
          <div className="widget-row">
            <GridTeam
              logo={nfl[3].logo}
              name={nfl[3].name}
              record={nfl[3].record}
            />
            <ThreeWay
              spread={nfl[3].spread}
              total={nfl[3].total}
              spreadOdds={nfl[3].spreadOdds}
              totalOdds={nfl[3].totalOdds}
              moneylineOdds={nfl[3].moneylineOdds}
            />
          </div>
          <GridDetails />
        </div>
        <div className="widget-body">
          <GridInfo />
          <div className="widget-row">
            <GridTeam
              logo={nfl[4].logo}
              name={nfl[4].name}
              record={nfl[4].record}
            />
            <ThreeWay
              spread={nfl[4].spread}
              total={nfl[4].total}
              spreadOdds={nfl[4].spreadOdds}
              totalOdds={nfl[4].totalOdds}
              moneylineOdds={nfl[4].moneylineOdds}
            />
          </div>
          <div className="widget-row">
            <GridTeam
              logo={nfl[5].logo}
              name={nfl[5].name}
              record={nfl[5].record}
            />
            <ThreeWay
              spread={nfl[5].spread}
              total={nfl[5].total}
              spreadOdds={nfl[5].spreadOdds}
              totalOdds={nfl[5].totalOdds}
              moneylineOdds={nfl[5].moneylineOdds}
            />
          </div>
          <GridDetails />
        </div>
      </div>
    </div>
  );
};

export default Markets;
