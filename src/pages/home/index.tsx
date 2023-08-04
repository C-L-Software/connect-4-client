import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "./components/title";
import Footer from "./components/footer";

export default () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Title />
      <Footer />
    </Box>
  );
};
