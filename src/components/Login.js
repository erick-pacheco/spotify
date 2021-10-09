import React from "react";
import { loginUrl } from "../configs/spotify";
import { useStateValue } from "../data/StateProvider";

export default function Login({ theme }) {
  const [{spotify_img}] = useStateValue()
  return (
    <div
      className={`h-100 ${theme === "dark" ? "text-white" : "text-dark"} ${
        "bg bg-" + theme
      }`}
    >
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="d-flex flex-column">
          <table style={{ minHeight: "100vh" }}>
            <tbody>
              <tr>
                <td className="align-middle">
                  <img
                    src={spotify_img}
                    className="img-fluid mb-5"
                    alt="Spotify Logo"
                    style={{ maxWidth: "40vh" }}
                  />
                  <div className="d-grid gap-2 mt-5">
                    <a
                      className="btn btn-spotify"
                      type="button"
                      href={loginUrl}
                    >
                      Login With Spotify
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
