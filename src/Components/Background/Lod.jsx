import React from 'react';
import { bouncy } from 'ldrs'

bouncy.register()

const lod = () => {
  return (
    <div style={{ height:"100vh" , display: "flex", justifyContent: "center", alignItems: "center" }}>
  <l-bouncy
  size="40"
  speed="1.75" 
  color="white" 

></l-bouncy>
    </div>
  );
};

export default lod;
