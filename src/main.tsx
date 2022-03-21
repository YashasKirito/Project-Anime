import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchContext } from "./hooks/context/useSearch";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Project-Anime">
      <SearchContext>
        <App />
      </SearchContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
