import React from "react";
import Body from "./Body";
import Footer from "./Footer";

export default function Player() {
  return (
    <div className="player">
      <div className="player_body">
         <Body />
      </div>
      <Footer />{" "}
    </div>
  );
}
