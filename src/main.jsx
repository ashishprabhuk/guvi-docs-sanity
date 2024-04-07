import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import ContextApi from "./Context/contextApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextApi>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextApi>
  </BrowserRouter>
);
