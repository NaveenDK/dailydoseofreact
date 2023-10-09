import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Superhero from "./exercises/Superhero";
import Trivia from "./exercises/Trivia";
import Cookie from "./exercises/Cookie";
import Lists from "./exercises/Lists";
import RecipeList from "./exercises/RecipeList";
import Website from "./exercises/Website";
import SimposonsQuotes from "./exercises/SimpsonsQuotes";
import reportWebVitals from "./reportWebVitals";
import VPiano from "./exercises/VPiano";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VPiano />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
