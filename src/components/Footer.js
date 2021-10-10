import React from "react";
import XSpread from "./XSpread";
import YSpread from "./YSpread";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SliderItem from "./Slider";
import SwipeableTemporaryDrawer from "./Drawer";

export default function Footer() {
  return (
    <footer class="footer mt-auto py-2">
      <YSpread
        children={[
          <div class="progress mb-3" style={{ height: "5px" }}>
            <div
              class="progress-bar bg-spotify"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>,
          <XSpread
            item_pos="center"
            text="center"
            children={[
              <FooterLeftChildren />,
              <FooterCenter />,
              <FooterRight />,
            ]}
          />,
        ]}
      />
    </footer>
  );
}

const FooterCenterChildren = [
  <XSpread
    children={[
      <ShuffleIcon />,
      <ArrowBackIosIcon />,
      <PlayCircleOutlineIcon fontSize="large" className="hoverspotify" />,
      <ArrowForwardIosIcon />,
      <LoopIcon />,
    ]}
  />,
];

const FooterLeftChildren = () => {
  return (
    <XSpread
      itemt_pos="start"
      text="center"
      children={[
        <img
          src="https://bit.ly/3oNvIn7"
          className="rounded mx-auto d-block small-img"
          alt="Ubi"
        />,

        <YSpread
          children={[
            <p className="hoverspotify text-white">
              <>Village People</>
            </p>,
            <small className="text-muted">YMCA OFFICIAL Music</small>,
          ]}
        />,
      ]}
    />
  );
};

export const FooterCenter = () => {
  return (
    <>
      <YSpread items_pos="center" children={FooterCenterChildren} />
    </>
  );
};

const FooterRight = () => {
  return (
    <XSpread
      children={[
        <FavoriteBorderIcon className="hoverspotify" />,
        <SliderItem className="color-spotify" />,
        <PlaylistAddIcon className="hoverspotify" />,
      ]}
    />
  );
};
