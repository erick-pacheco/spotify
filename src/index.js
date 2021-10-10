import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import NotificationProvider from "./components/NotificationProvider";
import initialState from "./data/initialState";
import reducer from "./data/reducer";
import StateProvider from "./data/StateProvider";
import { ThemeProvider, theme } from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
