import React, { Suspense } from "react";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { Model } from "./Brazillian_boot_-_vento_tita";
import { useControls } from "leva";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

function Boot() {
  // const { intensity, positionX, positionY, positionZ } = useControls({
  //   intensity: { value: 3, min: 0, max: 10, step: 0.1 },
  //   positionX: { value: 0, min: -10, max: 10, step: 0.1 },
  //   positionY: { value: 3, min: -10, max: 10, step: 0.1 },
  //   positionZ: { value: 3, min: -10, max: 10, step: 0.1 },
  // });
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={4} />
      <directionalLight position={[-1.7, 2.4, 4.9]} intensity={4.8} />

      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </>
  );
}

export default Boot;
