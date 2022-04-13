import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-rater/lib/react-rater.css";
import AericaItemsContext from "./context/AericaItemsContext";

ReactDOM.render(
  <React.StrictMode>
    <AericaItemsContext>
      <App />
    </AericaItemsContext>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
