import React from 'react'
import './App.css';
import LoginDuration from "./components/LoginDuration";
import Nav from "./components/Nav";
import NavFunction from "./components/NavFunction";
import MarketNav from "./components/MarketNav";
import Marquee from "./components/Marquee";
import TopEvents from "./components/TopEvents";
import Markets from "./components/Markets";
import Footer from "./components/Footer";
import ProductMenu from "./components/ProductMenu";

const App = () => {
  return (
    <div>
      <LoginDuration />
      <Nav />
      <NavFunction />
      <MarketNav />
      <Marquee />
      <div className="body-wrapper">
        <TopEvents />
        <Markets />
      </div>
      <Footer />
      <ProductMenu />
    </div>
  )
}
export default App;
