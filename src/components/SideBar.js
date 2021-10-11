import React from "react";
import { useStateValue } from "../data/StateProvider";
import SideBarItem from "./SideBarItem";
// @mui
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";

const SideBar = () => {
  const [{ spotify_img }] = useStateValue();

  return (
    <div className={`sidebar`}>
      <div className="container">
        <img
          src={spotify_img}
          alt="logo"
          className="sidebar_logo my-4 mx-3"
        ></img>
        <SideBarItem
          children={
            <>
              <HomeIcon /> &nbsp;&nbsp;Home
            </>
          }
        />
        <SideBarItem
          children={
            <>
              <SearchIcon /> &nbsp;&nbsp;Search
            </>
          }
        />
        <SideBarItem
          children={
            <>
              <LibraryMusicIcon /> &nbsp;&nbsp;Library
            </>
          }
        />
        <br />
        <strong>
          <p>PLAYLIST</p>
        </strong>
        <hr />
        {[
          "Hip Hop",
          "Eminem",
          "Rock",
          "Angeles del Infierno",
          "Hip Hop",
          "Eminem",
          "Rock",
          "Angeles del Infierno",
        ]?.map((item, index) => (
          <SideBarItem key={index}>
            <p>{item}</p>
          </SideBarItem>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
