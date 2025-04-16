import { Environment, Float, Lightformer, OrbitControls, RandomizedLight, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Lod from "../Background/Lod";
import { Car } from "./Car";

const Modal = () => {
  return (
      <Suspense fallback={<Lod />}>
    <Canvas camera={{ position: [1, 3, 10], fov: 20 }} style={{ height: "60vh", borderRadius: "20%" }}>
        {/* OrbitControls outside Float */}
        <OrbitControls enableZoom={false} enableRotate={false}  />

        {/* Optional: let Stage handle lighting/environment */}
        
        <RandomizedLight castShadow amount={8} frames={100} position={[5, 5, -10]} />

<ambientLight intensity={4} />
<ambientLight intensity={4} />
<Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />

          <Float speed={2} rotationIntensity={1}>
           <Car/>
          </Float>
       
   
    </Canvas>
      </Suspense>
  );
};

export default Modal;
