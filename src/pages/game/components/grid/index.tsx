import React from "react";
import GridItem from "../grid-item";
import { Grid } from "@mui/material";

const rows = [0, 1, 2, 3, 4, 5, 6];
const cols = [0, 1, 2, 3, 4, 5];

export default () => {
  return (
    <>
      <Grid container></Grid>
      {/* {rows.map((row) => {
        cols.map((col) => {
          <GridItem />;
        });
      })} */}
    </>
  );
};
