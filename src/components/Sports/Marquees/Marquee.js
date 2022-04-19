import React from "react";
import "./Marquee.css";
import MarqueeCardEvent from "./MarqueeCardEvent";
import MarqueeCardPromo from "./MarqueeCardPromo";

const Marquee = () => {
  const promoMarquee = [
    {
      bg: "https://scmedia.itsfogo.com/$-$/1cad9d941a2242e8969ece5c1fa522a6.png",
    },
  ];
  const eventMarquee = [
    {
      bg: "https://scmedia.itsfogo.com/$-$/1cad9d941a2242e8969ece5c1fa522a6.png",
    },
  ];
  return (
    <div className="marquee-container d-flex">
      <MarqueeCardPromo />
      <MarqueeCardEvent />
    </div>
  );
};

export default Marquee;
