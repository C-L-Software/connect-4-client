import React from "react";
import Home from "./pages/home";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./router";
import { createRoot } from "react-dom/client";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ width: "100%", height: "100%" }}>
      <RouterProvider router={Router} />
    </div>
  </ThemeProvider>
);
