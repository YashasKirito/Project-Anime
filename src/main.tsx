import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AnimeNowContext } from "./hooks/context/useAnimeNow";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Project-Anime">
      <AnimeNowContext>
        <App />
      </AnimeNowContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
