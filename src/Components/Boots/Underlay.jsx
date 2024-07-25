import { Html, Text } from "@react-three/drei";
import React, { useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";

function Underlay() {
  const ref = useRef();
  const { viewport } = useThree();

  const fontProps = { font: "/Boot/PTSerif-Italic.woff", fontSize: 1.5 };
  const fontProps2 = { font: "/Boot/PTSerif-Italic.woff", fontSize: 3.5 };

  // Calculate position based on viewport size
  let positionX1, positionY1, positionX2, positionY2;

  if (viewport.width < 6) {
    // Mobile devices
    positionX1 = -2.8;
    positionY1 = 3;
    positionX2 = -4.1;
    positionY2 = 3;
  } else if (viewport.width < 10) {
    // Small screens
    positionX1 = -7.5;
    positionY1 = 2;
    positionX2 = -8.2;
    positionY2 = 3;
  } else {
    // Larger screens
    positionX1 = -12.5;
    positionY1 = 6;
    positionX2 = -12.5;
    positionY2 = 2;
  }

  //group for first and second mesh
  let groupPositionX, groupPositionY, groupPositionX2, groupPositionY2;
  if (viewport.width < 6) {
    // Mobile devices
    groupPositionX = 2.8;
    groupPositionX2 = 15.6;
    groupPositionY = 3;
    groupPositionY2 = -5;
  } else if (viewport.width < 10) {
    // Small screens
    groupPositionX = 3;
    groupPositionX2 = 17;
    groupPositionY = 3.2;
    groupPositionY2 = -2;
  } else {
    // Larger screens
    groupPositionX = 0.5;
    groupPositionX2 = 17.9;
    groupPositionY = -1;
    groupPositionY2 = -1;
  }

  //Args for left mesh
  let argsWidth;

  if (viewport.width < 6) {
    // Mobile devices
    argsWidth = 20;
  } else if (viewport.width < 10) {
    // Small screens
    argsWidth = 23.4;
  } else {
    // Larger screens
    argsWidth = 25;
  }

  return (
    <>
      <group
        scale={viewport.width / 10}
        ref={ref}
        position={[positionX1, positionY1, -6]}
      >
        <mesh position={[0, 0, -2.1]}>
          <planeGeometry args={[argsWidth, 100]} />
          <meshBasicMaterial color="#252525" />
        </mesh>
        <group position={[groupPositionX, groupPositionY, 0]}>
          <Text
            position={[0.1, 0.2, -2]}
            color={"hsl(25, 17%, 49%)"}
            {...fontProps}
          >
            {" "}
            THE SISTRUM
          </Text>
          <Text
            position={[-0.1, -1.22, -2]}
            color={"hsl(25, 17%, 49%)"}
            {...fontProps}
          >
            {" "}
            IS DESIGNED{" "}
          </Text>

          <Text
            position={[0.5, -2.42, -2]}
            color={"hsl(25, 17%, 49%)"}
            {...fontProps}
          >
            {" "}
            TO REPRESENT{" "}
          </Text>

          <Text
            position={[-0.6, -3.92, -2]}
            color={"hsl(25, 17%, 49%)"}
            {...fontProps}
          >
            {" "}
            CONTINUAL{" "}
          </Text>

          <Text
            position={[-0.6, -5.32, -2]}
            color={"hsl(25, 17%, 49%)"}
            {...fontProps}
          >
            {" "}
            AGITATION.{" "}
          </Text>
        </group>
      </group>
      <group
        scale={viewport.width / 10}
        ref={ref}
        position={[positionX2, positionY2, -3]}
      >
        <mesh position={[18, 0, -4.1]}>
          <planeGeometry args={[11, 100]} />
          <meshBasicMaterial color="hsl(25, 17%, 49%)" />
        </mesh>

        <group position={[groupPositionX2, groupPositionY2, -4]}>
          <Text {...fontProps2} color={"hsl(0, 0%, 7%)"}>
            M1
          </Text>
        </group>
      </group>
    </>
  );
}

export default Underlay;
