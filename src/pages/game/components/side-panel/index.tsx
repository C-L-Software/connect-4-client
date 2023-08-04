import React from "react";
import FlexBox from "../../../../components/flex-box";
import { Paper, Typography, Divider } from "@mui/material";

export default () => {
  return (
    <FlexBox>
      <Paper sx={{ width: "100%", height: "100%", textAlign: "center", p: 2 }}>
        <Typography variant="h4">Connect 4</Typography>
        <Divider />
      </Paper>
    </FlexBox>
  );
};
