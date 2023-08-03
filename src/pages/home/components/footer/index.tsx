import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default () => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        paddingBottom: "3%",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "cursive" }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            delay: 1.5,
            x: { duration: 1 },
          }}
        >
          A game about connections...
        </motion.span>
      </Typography>
    </Box>
  );
};
