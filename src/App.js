import React from "react";
import "./App.css";
import LoginDuration from "./components/LoginDuration";
import Navbar from "./components/App/Navbar";
import SportsMenu from "./components/Sports/SportsMenu";
import SportsNav from "./components/Sports/SportsNav";
import Marquee from "./components/Sports/Marquees/Marquee";
import TopEvents from "./components/TopEvents";
import ComposableWidget from "./components/Sports/ComposableWidget";
import Footer from "./components/App/Footer";
import Betslip from "./components/Sports/Betslip";
import BottomNav from "./components/App/BottomNav";

const App = () => {
  return (
    <div>
      <LoginDuration />
      <Navbar />
      <SportsMenu />
      <SportsNav />
      <Marquee />
      <div className="app-wrapper">
        <TopEvents />
        <ComposableWidget />
      </div>
      <Footer />
      <Betslip />
      <BottomNav />
    </div>
  );
};
export default App;
