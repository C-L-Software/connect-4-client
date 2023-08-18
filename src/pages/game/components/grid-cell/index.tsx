import React from "react";
import { GameActionType } from "../../../../types/game";
import { Box, Paper } from "@mui/material";
import { useGame } from "../../../../hooks/useGame";
import { grey, red, blue } from "@mui/material/colors";

type Props = {
  cellValue: string;
  row: number;
  column: number;
};

export default ({ cellValue, row, column }: Props) => {
  const {
    state: { playerId, gameBoard, currentTurn },
    dispatch,
  } = useGame();

  const cellClick = () => {
    // This cell has already been taken
    // or, it is not our turn
    if (!!cellValue || playerId !== currentTurn) {
      return;
    }

    const newBoard = JSON.parse(JSON.stringify(gameBoard));
    newBoard[row][column] = playerId;

    // TODO: Replace this with fetch
    // with just the column
    dispatch({ type: GameActionType.UPDATE_BOARD, value: newBoard });
  };

  const getColorFromValue = () => {
    if (!cellValue) {
      return grey[800];
    }
    if (cellValue === playerId) {
      return blue[500];
    }
    return red[500];
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
