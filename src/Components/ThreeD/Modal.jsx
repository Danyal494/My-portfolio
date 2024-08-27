import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Helecopter } from './Helecopter'
import { Environment, Float, OrbitControls, Stage } from '@react-three/drei'

const Modal = () => {
  return (
   <Canvas camera={{ position: [1, 3, 10], fov: 50 }} style={{ height: "60vh", borderRadius: "20%" }}>
    <Suspense fallback={null}>
      <Stage>
        <Float autoInvalidate>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1.5} />
          <Environment preset='city' 
          // background={true}
           />
          <Helecopter />
        </Float>
      </Stage>
    </Suspense>
   </Canvas>
  )
}

export default Modal
