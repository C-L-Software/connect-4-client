import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Game from "./pages/game";
import NewGame from "./pages/new-game";
import Join from "./pages/join";

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
