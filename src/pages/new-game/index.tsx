import React, { useEffect } from "react";
import FlexBox from "../../components/flex-box";
import BackButton from "../../components/back-button";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../hooks/useGame";
import { Paper, Box, Divider, Typography, Stack, Button } from "@mui/material";

export default () => {
  const {
    newGame,
    state: { joinCode, hasStarted },
  } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    if (hasStarted) {
      navigate("/game");
    }
  }, [hasStarted]);

  return (
    <FlexBox>
      <Paper elevation={2}>
        <Box>
          <Stack spacing={2}>
            <Stack direction={"column"}>
              <BackButton />
            </Stack>
            <Stack direction={"column"} spacing={0.2}>
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h4">New Game</Typography>
                <Divider sx={{ mt: 1 }} />
              </Box>
              <Box sx={{ p: 3, pt: 0, textAlign: "center" }}>
                <Box sx={{ border: "1px solid grey", p: 2 }}>
                  <Stack direction={"column"} spacing={1}>
                    <Typography>
                      Your game code is: <b>{joinCode}</b>
                    </Typography>
                    <Typography>
                      Send this game code to your opponent.
                    </Typography>
                    <Typography>
                      Once your opponent has joined, the game will begin
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </FlexBox>
  );
};
