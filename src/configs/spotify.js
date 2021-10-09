/**
 * Spotify Authentication API
 * https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
 */

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "995efab9ad6f4d23b012e50fdb4ba513";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
const extractToken = () =>
  window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");

      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});

export { loginUrl, extractToken, spotify };
