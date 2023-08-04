import React from "react";
import FlexBox from "../../../../components/flex-box";
import { Paper, Typography, Divider, Stack } from "@mui/material";
import { useGame } from "../../../../hooks/useGame";

export default () => {
  const {
    state: { currentTurn, playerId },
  } = useGame();

  return (
    <FlexBox>
      <Paper sx={{ width: "100%", height: "100%", textAlign: "center", p: 2 }}>
        <Typography variant="h4">Connect 4</Typography>
        <Divider />
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          direction={"column"}
        >
          <Typography variant="h5">
            {currentTurn === playerId ? "Your turn" : "Other players turn"}
          </Typography>
        </Stack>
      </Paper>
    </FlexBox>
  );
};
