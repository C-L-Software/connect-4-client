import React from "react";
import Router from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import Connection from "./connection";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { GameProvider } from "./contexts/game-context";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GameProvider>
        <Connection>
          <div style={{ width: "100%", height: "100%" }}>
            <RouterProvider router={Router} />
          </div>
        </Connection>
      </GameProvider>
    </ThemeProvider>
  );
};
