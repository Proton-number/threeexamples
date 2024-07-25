import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";
import { momentum } from "ldrs";

momentum.register();
function LoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <Box
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          component={motion.div}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            zIndex: 1000, // Ensure the loading component is on top
          }}
        >
          <l-momentum size="45" speed="2" color="white"></l-momentum>
        </Box>
      )}
    </AnimatePresence>
  );
}

export default LoadingComponent;
