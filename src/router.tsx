import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Game from "./pages/game";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);
