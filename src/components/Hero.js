import React from "react";
import { XSpread48 } from "./XSpread";

export const Hero = () => {
  return (
    <XSpread48
      fade={"animate__animated animate__rollIn"}
      four={
        <div className="text-center mt-3">
          <img
            src="https://bit.ly/3mIAJL2"
            className="rounded mx-auto d-block img-thumbnail-or"
            alt="Song Title"
          ></img>
        </div>
      }
      eight={
        <>
          <p className="text-white my-5">PLAYING</p>
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
