import React from "react";
import XSpread, { XSpread48 } from "./XSpread";
import YSpread from "./YSpread";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const Hero = () => {
  return (
    <XSpread48
      four={
        <div className="my-2 text-center">
          <img
            src="https://bit.ly/3mIAJL2"
            className="rounded mx-auto d-block img-thumbnail-or"
            alt="Song Title"
          ></img>
        </div>
      }
      eight={
        <>
          <p className="text-white mt-5">PLAYLIST</p>
          <h5 className="text-white">INDUSTRY BABY</h5>
          <p className="text-white">
            Lil Nas X, Jack Harlow&nbsp;&nbsp;&nbsp;
            <span className="text-muted">2 songs, 6 min 14 sec</span>
          </p>
        </>
      }
    />
  );
};
