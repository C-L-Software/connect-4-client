import React, { useEffect } from "react";
import FlexBox from "../../../../components/flex-box";
import { Paper, Typography, Divider, Stack } from "@mui/material";
import { useGame } from "../../../../hooks/useGame";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const {
    state: { turnPlayer, playerId, winner },
  } = useGame();

  useEffect(() => {
    if (winner) {
      alert(winner === playerId ? "YOU HAVE WON" : "YOU HAVE LOST");
      navigate("/");
    }
  }, [winner]);

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
            {turnPlayer === playerId ? "Your turn" : "Other players turn"}
          </Typography>
        </Stack>
      </Paper>
    </FlexBox>
  );
};
