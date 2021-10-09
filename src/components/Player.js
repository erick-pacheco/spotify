import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";

export default function Player() {

  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <Body />
      </div>
      <Footer />{" "}
    </div>
  );
}