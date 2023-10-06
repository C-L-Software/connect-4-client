import React, { useState, useEffect } from "react";
import FlexBox from "../../components/flex-box";
import BackButton from "../../components/back-button";
import {
  Button,
  Paper,
  TextField,
  Box,
  Stack,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GameActionType } from "../../types/game";
import { useGame } from "../../hooks/useGame";

const ERROR_TEXT = "Game Code cannot be empty!";

export default () => {
  const {
    state: { hasStarted },
    dispatch,
    joinGame,
  } = useGame();
  const navigate = useNavigate();
  const [gameCode, setGameCode] = useState<string | undefined>(undefined);
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    if (!gameCode) {
      return setErrorText(ERROR_TEXT);
    }
    setIsLoading(true);
    joinGame(gameCode);
  };

  const handleGameCodeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (errorText && !isNaN(parseInt(value))) {
      setErrorText(undefined);
    } else {
      setGameCode(value);
    }
  };

  useEffect(() => {
    if (hasStarted) {
      navigate("/game");
    }
  }, [hasStarted]);

  return (
    <FlexBox>
      <Paper elevation={2}>
        {isLoading ? (
          <Stack spacing={1} sx={{ p: 2 }}>
            <Box sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">Attempting to join game...</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          </Stack>
        ) : (
          <Box>
            <Stack spacing={2}>
              <Stack direction={"column"}>
                <BackButton />
              </Stack>
            </Stack>
            <Stack direction={"column"} spacing={0.2}>
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h4">Join Game</Typography>
                <Divider sx={{ mt: 1 }} />
              </Box>
              <Box sx={{ p: 3, pt: 0, width: "100%", textAlign: "center" }}>
                <Typography>
                  Grab the code from your friend (<i>or enemy</i>) and click
                  Join!
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ padding: 5 }}>
              <Stack spacing={2}>
                <TextField
                  type="number"
                  label="Game code"
                  variant="outlined"
                  onChange={handleGameCodeUpdate}
                  error={!!errorText}
                  helperText={errorText}
                />
                <Button variant="contained" onClick={onSubmit}>
                  Join
                </Button>
              </Stack>
            </Box>
          </Box>
        )}
      </Paper>
    </FlexBox>
  );
};
