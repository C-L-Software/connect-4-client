import React, { useEffect } from "react";
import FlexBox from "../../components/flex-box";
import BackButton from "../../components/back-button";
import { useGame } from "../../hooks/useGame";
import { Paper, Box, Divider, Typography, Stack, Button } from "@mui/material";

export default () => {
  const {
    newGame,
    state: { joinCode },
  } = useGame();

  useEffect(() => {
    newGame();
  }, []);

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
                      Once your opponent has joined, click the Start button
                      below
                    </Typography>
                  </Stack>
                </Box>

                <Box sx={{ mt: 2, mb: 2 }}>
                  <Typography style={{ fontWeight: "bold" }}>
                    Player count: 1/2
                  </Typography>
                </Box>
                <Stack direction={"row"} justifyContent={"center"}>
                  <Button variant="contained">Start</Button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </FlexBox>
  );
};
