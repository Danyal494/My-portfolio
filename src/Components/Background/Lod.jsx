import React from 'react';
import { bouncy } from 'ldrs'

bouncy.register()

const Lod = () => {
  return (
    <div style={{ width:"100vh" , display: "flex", justifyContent: "center", alignItems: "center" }}>
  <l-bouncy
  size="40"
  speed="1.75" 
  color="black" 

></l-bouncy>
    </div>
  );
};

export default Lod;
