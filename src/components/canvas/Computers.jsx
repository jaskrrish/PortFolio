import React from "react";
import * as THREE from "three";
import Scene from "../../../public/toy_desktop_pc/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Computers = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default Computers;
