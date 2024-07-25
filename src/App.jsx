import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Boot from "./Components/Boots/Boot";
import Underlay from "./Components/Boots/Underlay";
import LoadingComponent from "./Components/LoadingComponent";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <LoadingComponent />
      <>
        <Canvas
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 3 } }}
          shadows
          dpr={[1, 2]}
        >
          <Underlay />
          <Boot />
        </Canvas>
      </>
    </>
  );
}

export default App;
