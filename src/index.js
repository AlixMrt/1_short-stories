import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";

import { Routes, Route, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);