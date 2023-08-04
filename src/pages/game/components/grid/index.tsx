import React, { useEffect, useState } from "react";
import GridCell from "../grid-cell";
import FlexBox from "../../../../components/flex-box";
import { Stack, Box } from "@mui/material";
import { useGame } from "../../../../hooks/useGame";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../../../../constants";

export default () => {
  const {
    state: { gameBoard },
    dispatch,
  } = useGame();
  const [rows, setRows] = useState<number[]>([]);
  const [cols, setCols] = useState<number[]>([]);

  useEffect(() => {
    setRows([...Array.from(Array(gameBoard.length)).keys()]);
    setCols([...Array.from(Array(gameBoard[0].length)).keys()]);
  }, [gameBoard]);

  return (
    <FlexBox>
      <Box sx={{ width: BOARD_WIDTH, height: BOARD_HEIGHT }}>
        <Stack direction={"column"} sx={{ height: "100%", width: "100%" }}>
          {rows.map((row) => (
            <Stack direction={"row"} sx={{ height: "16%" }}>
              {cols.map((col) => (
                <Box sx={{ width: "14%", height: "100%" }}>
                  <GridCell
                    row={row}
                    column={col}
                    cellValue={gameBoard[row][col]}
                  />
                </Box>
              ))}
            </Stack>
          ))}
        </Stack>
      </Box>
    </FlexBox>
  );
};
