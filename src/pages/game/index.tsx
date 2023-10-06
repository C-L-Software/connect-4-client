import React, { useEffect } from "react";
import FlexBox from "../../components/flex-box";
import Grid from "./components/grid";
import SidePanel from "./components/side-panel";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../hooks/useGame";
import { Stack, Grid as MuiGrid } from "@mui/material";

export default () => {
  const {
    state: { hasStarted, socket },
    dispatch,
  } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasStarted || !socket) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {hasStarted && (
        <FlexBox>
          <MuiGrid container sx={{ width: "100%", height: "100%" }}>
            <MuiGrid item xs={10}>
              <Grid />
            </MuiGrid>
            <MuiGrid item xs={2}>
              <Stack
                direction={"column"}
                sx={{ height: "100%", width: "100%" }}
              >
                <SidePanel />
              </Stack>
            </MuiGrid>
          </MuiGrid>
        </FlexBox>
      )}
    </>
  );
};
