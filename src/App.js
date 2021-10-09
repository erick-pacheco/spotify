import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { extractToken } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = extractToken();
    const _token = hash?.access_token;
    // _token is the temporary token

    if (_token) {
      setToken(_token);
    }
  }, []);

  return <>{token ? <p>Welcome to your player</p> : <Login theme="dark" />}</>;
}

export default App;
