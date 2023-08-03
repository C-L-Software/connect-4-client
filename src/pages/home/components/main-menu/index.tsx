import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";

export default () => {
  const navigate = useNavigate();

  const onClick = (route: string) => {
    navigate(route);
  };

  return (
    <Stack direction={"column"} spacing={2}>
      <Button onClick={() => onClick("/game")}>
        <Typography variant="h5">New Game</Typography>
      </Button>
      <Button onClick={() => onClick("/about")}>
        <Typography variant="h5">About</Typography>
      </Button>
    </Stack>
  );
};
