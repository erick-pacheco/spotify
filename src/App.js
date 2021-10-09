import React, { useEffect, useState } from "react";

import Login from "./components/Login";
import { extractToken, spotify } from "./spotify";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = extractToken();
    const _token = hash?.access_token;
    // _token is the temporary token

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, []);

  return <>{token ? <p>Welcome to your player</p> : <Login theme="dark" />}</>;
}

export default App;
