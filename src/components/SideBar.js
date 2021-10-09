import React from "react";
import { useStateValue } from "../data/StateProvider";

export default function SideBar() {
  const [{ spotify_img }] = useStateValue();
  const windowRef = {
    height: window.screen.availHeight,
    width: window.screen.availWidth,
  };

  return (
    <div className="sidebar">
      <img src={spotify_img} alt="logo" className="sidebar_logo"></img>
      Hello sidebar red
    </div>
  );
}
