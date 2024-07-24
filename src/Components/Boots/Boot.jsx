import React, { Suspense, lazy } from "react";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { Model } from "./Brazillian_boot_-_vento_tita";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

function Boot() {
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={4} />
      <directionalLight position={[0, 3, 3]} intensity={3} />

      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </>
  );
}

export default Boot;
