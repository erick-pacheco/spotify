import React from "react";
import { loginUrl } from "../configs/spotify";
import { useStateValue } from "../data/StateProvider";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import XSpread from "./XSpread";

export default function Login({ theme }) {
  const [{ spotify_img }] = useStateValue();
  const [transitionUp, setTransitionUp] = React.useState("animate__backInUp");
  const [transitionDown, setTransitionDown] = React.useState(
    "animate__backInDown"
  );
  return (
    <div
      className={`login h-100 ${
        theme === "dark" ? "text-white" : "text-dark"
      } ${"bg bg-" + theme}`}
    >
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="d-flex flex-column">
          <table style={{ minHeight: "100vh" }}>
            <tbody>
              <tr>
                <td className="align-middle">
                  <img
                    src={spotify_img}
                    className="animate__animated animate__backInDown  img-fluid mb-5"
                    alt="Spotify Logo"
                    style={{ maxWidth: "40vh" }}
                    onTouchMoveCapture
                  />

                  <div className="d-grid gap-2 mt-5 animate__animated animate__backInUp">
                    <a
                      className="btn btn-spotify shadow-lg shadow-spotify"
                      type="button"
                      href={loginUrl}
                    >
                      Login With Spotify <PlayCircleOutlineIcon />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
