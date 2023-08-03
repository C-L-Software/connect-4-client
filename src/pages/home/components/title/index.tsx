import React, { useEffect } from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainMenu from "../main-menu";

const wordAnimation = {
  hidden: {},
  visible: {},
};

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: "0.25em",
  },
  visible: {
    opacity: 1,
    y: "0em",
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

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
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "15%",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h2">
          {"Connect 4".split(" ").map((word, index) => (
            <motion.span
              ref={ref}
              key={index}
              initial="hidden"
              animate={controls}
              variants={wordAnimation}
              transition={{
                delay: index * 0.25,
                staggerChildren: 0.1,
              }}
            >
              {word.split("").map((char, index) => (
                <motion.span key={index} variants={characterAnimation}>
                  {char}
                </motion.span>
              ))}{" "}
            </motion.span>
          ))}
        </Typography>
        <motion.div
          initial={{ scale: 0.2 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 1 }}
        >
          <Divider sx={{ marginBottom: 3 }} />
        </motion.div>
        <MainMenu />
      </Stack>
    </Box>
  );
};
