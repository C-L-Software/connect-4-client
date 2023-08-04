import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Box } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";

export default () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Stack direction={"row"}>
        <Button onClick={onBack} startIcon={<ArrowBackIosNew />} sx={{ m: 1 }}>
          Go back
        </Button>
      </Stack>
    </Box>
  );
};
