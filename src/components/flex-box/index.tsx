import React from "react";
import { Box } from "@mui/material";

type Props = {
  justifyContent?: string;
  alignItems?: string;
  children?: React.ReactNode;
};

export default ({
  children,
  justifyContent = "center",
  alignItems = "center",
}: Props) => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent,
      alignItems,
    }}
  >
    {children}
  </Box>
);
