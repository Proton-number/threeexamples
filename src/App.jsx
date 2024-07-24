import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Boot from "./Components/Boots/Boot";
import Underlay from "./Components/Boots/Underlay";

function App() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <Underlay />
      <Boot />
    </Canvas>
  );
}

export default App;
