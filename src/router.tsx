import React from "react";
import { createHashRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Game from "./pages/game";
import NewGame from "./pages/new-game";
import Join from "./pages/join";

export default createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/new-game",
    element: <NewGame />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/join",
    element: <Join />,
  },
]);
