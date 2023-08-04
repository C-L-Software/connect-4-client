import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIosNew } from "@mui/icons-material";
import FlexBox from "../../components/flex-box";
import {
  Button,
  Paper,
  TextField,
  Box,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";

const ERROR_TEXT = "Game Code cannot be empty!";

export default () => {
  const [gameCode, setGameCode] = useState<number | undefined>(undefined);
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const onSubmit = () => {
    if (!gameCode) {
      return setErrorText(ERROR_TEXT);
    }
    setIsLoading(true);
  };

  const handleGameCodeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const asNumber = parseInt(value);
    setGameCode(asNumber);
    if (errorText && !isNaN(asNumber)) {
      setErrorText(undefined);
    }
  };

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
                <Stack direction={"row"}>
                  <Button
                    onClick={onBack}
                    startIcon={<ArrowBackIosNew />}
                    sx={{ m: 1 }}
                  >
                    Go back
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"column"} spacing={0.2}>
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h4">Join Game</Typography>
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
