import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./components/store/favorites-context";

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
