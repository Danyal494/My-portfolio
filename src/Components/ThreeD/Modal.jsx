import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Helecopter } from './Helecopter'
import { Environment, Float, OrbitControls, Stage } from '@react-three/drei'
import Lod from '../Background/Lod'

const Modal = () => {
  return (
    <Suspense fallback={<Lod/>}>
   <Canvas camera={{ position: [1, 3, 10], fov: 50 }} style={{ height: "60vh", borderRadius: "20%" }}>
      <Stage>
        <Float autoInvalidate>
          <OrbitControls enableZoom={false}   minPolarAngle={Math.PI / 4}  // Prevent downward movement
  maxPolarAngle={Math.PI / 2}  />
          <ambientLight intensity={1.5} />
          <Environment preset='city' 
          // background={true}
           />
          <Helecopter />
        </Float>
      </Stage>
   </Canvas>
    </Suspense>
  )
}

export default Modal
