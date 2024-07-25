import { Html, Text } from "@react-three/drei";
import React, { useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { Typography, Box } from "@mui/material";
import { FontLoader } from "three-stdlib";

function Underlay() {
  const ref = useRef();
  const { viewport } = useThree();

  const fontProps = { font: "/Boot/PTSerif-Italic.woff", fontSize: 1.5 };
  const fontProps2 = { font: "/Boot/PTSerif-Italic.woff", fontSize: 3.5 };

  // Calculate position based on viewport size
  let positionX1, positionY1;

  if (viewport.width < 6) {
    // Mobile devices
    positionX1 = -2.8;
    positionY1 = 3;
  } else if (viewport.width < 10) {
    // Small screens
    positionX1 = -4.5;
    positionY1 = 5;
  } else {
    // Larger screens
    positionX1 = -12.5;
    positionY1 = 6;
  }

  let positionX2, positionY2;

  if (viewport.width < 6) {
    // Mobile devices
    positionX2 = 2.8;
    positionY2 = 3;
  } else if (viewport.width < 10) {
    // Small screens
    positionX2 = 4.8;
    positionY2 = 3;
  } else {
    // Larger screens
    positionX2 = 6.5;
    positionY2 = 2;
  }

  return (
    <>
      <group
        scale={viewport.width / 10}
        ref={ref}
        position={[positionX1, positionY1, -6]}
      >
        <mesh position={[0, 0, -2.1]}>
          <planeGeometry args={[25, 30.9]} />
          <meshBasicMaterial color="#252525" />
        </mesh>
        <Text
          position={[0.1, 0.2, -2]}
          fontSize={1}
          color={"hsl(25, 17%, 49%)"}
          {...fontProps}
        >
          {" "}
          THE SISTRUM
        </Text>
        <Text
          position={[-0.1, -1.22, -2]}
          fontSize={1}
          color={"hsl(25, 17%, 49%)"}
          {...fontProps}
        >
          {" "}
          IS DESIGNED{" "}
        </Text>

        <Text
          position={[0.5, -2.42, -2]}
          fontSize={1}
          color={"hsl(25, 17%, 49%)"}
          {...fontProps}
        >
          {" "}
          TO REPRESENT{" "}
        </Text>

        <Text
          position={[-0.6, -3.92, -2]}
          fontSize={1}
          color={"hsl(25, 17%, 49%)"}
          {...fontProps}
        >
          {" "}
          CONTINUAL{" "}
        </Text>

        <Text
          position={[-0.6, -5.32, -2]}
          fontSize={1}
          color={"hsl(25, 17%, 49%)"}
          {...fontProps}
        >
          {" "}
          AGITATION.{" "}
        </Text>

        {/* <Html
          position={[0, 0, -2]}
          style={{
            zIndex: -1,
          }}
        >
          <Box
            sx={{
              color: "hsl(25, 17%, 49%)",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <Typography component="div" variant="h2" sx={{ fontSize: "4.5em" }}>
              {" "}
              THE SISTRUM IS DESIGNED TO REPRESENT CONTINUAL AGITATION
            </Typography>
          </Box>
        </Html> */}
      </group>
      <group
        scale={viewport.width / 10}
        ref={ref}
        position={[positionX1, positionY1, -3]}
      >
        <mesh position={[18, 0, -4.1]}>
          <planeGeometry args={[11, 30.5]} />
          <meshBasicMaterial color="hsl(25, 17%, 49%)" />
        </mesh>

        <Text
          {...fontProps2}
          position={[17.9, -3, -4]}
          color={"hsl(0, 0%, 7%)"}
        >
          M1
        </Text>
      </group>
    </>
  );
}

export default Underlay;
