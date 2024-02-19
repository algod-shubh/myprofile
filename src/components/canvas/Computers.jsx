import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor="white" />
      <pointLight intensity={1} />
<spotLight 
position={[-20,50,30]} 
angle={0.15}
penumbra={1}
intensity={1}
/>  
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[-0.5, -3.5, -1.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};
//implement isMobile
const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
