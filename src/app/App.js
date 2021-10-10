import React, { useEffect, useState } from "react";

import "animate.css";
import "../theme/index.css";

import Login from "../components/Login";
import { extractToken, spotify } from "../configs/spotify";
import { useStateValue } from "../data/StateProvider";
import {
  AUTH_SET_USER,
  SPOTIFY_SET_PLAYLIST,
} from "../data/action.types";
import Player from "../components/Player";
import { toast } from "react-toastify";

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = extractToken();
    const _token = hash?.access_token;
    // screenview

    // _token is the temporary token
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        toast.dark(<>Welcome, {user?.display_name}!</>, {});
        dispatch({
          type: AUTH_SET_USER,
          payload: user,
        });
      });
      spotify.getUserPlaylists().then((playlist) => {
        console.log({ playlist });
        dispatch({
          type: SPOTIFY_SET_PLAYLIST,
          payload: playlist,
        });
      });
    }
  }, []);

  return <>{token && user ? <Player /> : <Login theme="dark" />}</>;
}

export default App;
