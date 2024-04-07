import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextApi from "./Context/contextApi.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextApi>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextApi>
);
