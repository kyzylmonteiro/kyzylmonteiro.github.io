// import React, { useRef, useState } from "react";
import * as THREE from 'three'
//R3F
import {useThree, Canvas, useFrame } from "react-three-fiber";
import React, { useRef, useMemo, useState } from 'react'
// import { Canvas, useFrame } from 'react-three-fiber'
import { EffectComposer, SSAO } from 'react-postprocessing'
import './stylesCanvas.css'



function Swarm({ count, mouse }) {
    const mesh = useRef()
    const [dummy] = useState(() => new THREE.Object3D())
  
    const particles = useMemo(() => {
      const temp = []
      for (let i = 0; i < count; i++) {
        const t = Math.random() * 100
        const factor = 20 + Math.random() * 100
        const speed = 0.01 + Math.random() / 20
        const xFactor = -135 + Math.random() * 270
        const yFactor = -70 + Math.random() * 140
        const zFactor = -40 + Math.random() * 80
        const sthx = Math.random();
        const sthy = Math.random();
        const ampx = Math.random();
        const ampy = Math.random();
        const size = (Math.random()* 5)+5;
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, amplitudex:ampx, amplitudey:ampy , excitedx:sthx,  excitedy:sthy, mx: xFactor, my: yFactor, mz: zFactor,sz:size })
      }
      return temp
    }, [count])
  
    useFrame((state) => {
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor, sth } = particle
        t = particle.t += speed / 2
        const a = 2+Math.cos(t) + Math.sin(t * 5) / 10
        const b = 2+Math.sin(t) + Math.cos(t * 7) / 10
        const s = particle.sz
        // console.log(state.mouse.x, state.viewport.width, state.mouse.x * state.viewport.width, particle.mx)
        
        let quad=1;
        
        if(state.mouse.x * state.viewport.width/2<particle.mx && state.mouse.y * state.viewport.height/2<particle.my)
          quad = -1;
        else
          quad = -1;
        if ( ((( particle.mx - (state.mouse.x * state.viewport.width/2))* (particle.mx - (state.mouse.x * state.viewport.width/2))) + ((particle.my - (state.mouse.y * state.viewport.height/2) )*( particle.my - (state.mouse.y * state.viewport.height/2) )) )<= 50*50 )
        {
          // console.log( particle.mx, state.mouse.x, state.viewport.width/2, state.mouse.x * state.viewport.width/2)
          particle.mx += quad * Math.sign((state.mouse.x * state.viewport.width/2)  - (particle.mx)) * ((state.mouse.x * state.viewport.width/2)  - (particle.mx)+100)/200 
          particle.my += quad * Math.sign((state.mouse.y * state.viewport.height/2) - (particle.my)) * ((state.mouse.y * state.viewport.height/2) - (particle.my)+100)/200 
        }

        // Boundaries
        if ( ((particle.my/state.viewport.height)*2 <= -0.7 ) || ((particle.mx/state.viewport.width)*2 <= -0.7 ))
        {
          particle.mx += Math.sign((0 * state.viewport.width/2)  - (particle.mx)) * ((0 * state.viewport.width/2)  - (particle.mx)+25)/1000 
          particle.my += Math.sign((0 * state.viewport.height/2) - (particle.my)) * ((0 * state.viewport.height/2) - (particle.my)+25)/1000
        }
        if ( ((particle.my/state.viewport.height)*2 >= 0.7 ) ||  ((particle.mx/state.viewport.width)*2 >= 0.7 ))
        {
          particle.mx -= Math.sign((0 * state.viewport.width/2)  - (particle.mx)) * ((0 * state.viewport.width/2)  - (particle.mx)+25)/1000 
          particle.my -= Math.sign((0 * state.viewport.height/2) - (particle.my)) * ((0 * state.viewport.height/2) - (particle.my)+25)/1000 
        }

        if(Math.cos(2*t)<=0.05 &&Math.cos(2*t)>=-0.05 )
        {
          // console.log( particle.excited, Math.cos(20))
          particle.amplitudex = Math.random() * 20;
        }
        if(Math.cos(1*t)<=0.05 &&Math.cos(1*t)>=-0.05 )
        {
          // console.log( particle.excited, Math.cos(20))
          particle.amplitudey = Math.random() * 15;
        }
        particle.excitedx =  particle.amplitudex * Math.cos(2*t);
        particle.excitedy =  particle.amplitudey * Math.cos(1*t);

        dummy.position.set(
          // (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          // (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,0
          // (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
          particle.mx + particle.excitedx,
          particle.my + particle.excitedy,
          particle.mz
        )
        dummy.scale.set(s, s, s)
        dummy.updateMatrix()
        mesh.current.setMatrixAt(i, dummy.matrix)
        mesh.current.instanceMatrix.needsUpdate = true
      })
     
    })
  
    return (
      <>
        <instancedMesh ref={mesh} args={[null, null, count]} castShadow receiveShadow>
          <sphereBufferGeometry args={[2, 32, 32]} />
          <meshPhongMaterial shininess={0} />
        </instancedMesh>
      </>
    )
  }


function CanvasBGWhite() {
    return ( 
        <Canvas
        shadowMap
        gl={{ alpha: false, antialias: false }}
        camera={{ fov: 75, position: [0, 0, 100], near: 10, far: 150 }}
        onCreated={(state) => state.gl.setClearColor('#f0f0f0')}>
        <ambientLight intensity={1.5} />
        <pointLight position={[100, 100, 100]} intensity={2} castShadow />
        <pointLight position={[-100, -100, 0]} intensity={7} color="red" />
        <pointLight position={[100, 100, 0]} intensity={1} color="blue" />
        <Swarm count={25} />
        <EffectComposer multisampling={0}>
          <SSAO samples={13} radius={20} intensity={80} luminanceInfluence={0.1} color="black" />
        </EffectComposer>
      </Canvas>
     )
}

export default CanvasBGWhite;