import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import initialState from "./data/initialState";
import reducer from "./data/reducer";
import StateProvider from "./data/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
