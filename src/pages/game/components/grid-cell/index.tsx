import React from "react";
import { Box, Paper } from "@mui/material";
import { useGame } from "../../../../hooks/useGame";

type Props = {
  cellValue: string;
  row: number;
  column: number;
};

export default ({ cellValue, row, column }: Props) => {
  const {
    state: { playerId, gameBoard },
    dispatch,
  } = useGame();

  const cellClick = () => {
    // This cell has already been taken
    if (!!cellValue) {
      return;
    }
    console.log("here");
    const newBoard = JSON.parse(JSON.stringify(gameBoard));
    newBoard[row][column] = playerId;

    dispatch({ type: "UPDATE_BOARD", value: newBoard });
  };

  const getColorFromValue = () => {
    if (!cellValue) {
      return "grey";
    }
    if (cellValue === playerId) {
      return "blue";
    }
    return "red";
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Paper sx={{ width: "100%", height: "100%" }} elevation={2}>
        <Box
          onClick={() => cellClick()}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "100%",
            backgroundColor: getColorFromValue(),
          }}
        ></Box>
      </Paper>
    </Box>
  );
};
