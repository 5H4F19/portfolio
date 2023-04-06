import useSpline from '@splinetool/r3f-spline'

export function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/FY0sJzauRckyDNHs/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#feeaea']} />
      <group {...props} dispose={null}>
        <group name="Group" position={[24.09, 67.87, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_4.geometry}
            material={nodes.Sphere_4.material}
            position={[32.38, 222.83, 77.07]}
            scale={0.38} />
          <mesh
            castShadow
            receiveShadow

            geometry={nodes.Sphere_3.geometry}
            material={nodes.Sphere_3.material}
            position={[-24.84, 224.06, 78.97]}
            scale={[0.38, 0.37, 0.38]} />
          <mesh
            castShadow
            receiveShadow

            geometry={nodes.Sphere_2.geometry}
            material={nodes.Sphere_2.material}
            position={[-149.72, -50.55, 13]}
            rotation={[0, 0, -0.18]}
            scale={[0.21, 1, 1]} />
          <mesh
            castShadow
            receiveShadow

            geometry={nodes.Sphere.geometry}
            material={nodes.Sphere.material}
            position={[151.39, -44.39, 13]}
            rotation={[0, 0, 0.18]}
            scale={[0.21, 1, 1]} />
          <mesh
            castShadow
            receiveShadow

            geometry={nodes.Lathe_2.geometry}
            material={nodes.Lathe_2.material}
            position={[3.36, 205.76, 0]}
            scale={[2.2, 1.44, 2.2]} />
          <mesh
            castShadow
            receiveShadow

            geometry={nodes.Lathe.geometry}
            material={nodes.Lathe.material}
            position={[1.8, -75.92, 0]}
            scale={[-3.01, 3.96, 3.01]} />
        </group>
        <directionalLight
          name="Directional Light"
          intensity={3.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[225.89, 300, 300]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={1.11}
          far={100000}
          near={-100000}
          position={[4.67, 74.28, 10581.84]}
          rotation={[0, 0, 0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export function Model({ ...props }) {
  //@ts-ignore
  const { nodes, materials } = useGLTF('/shafiq.glb')
  return (
    <>
      <group {...props} scale={1}>
        <group name="Group" position={[24.09, 67.87, 0]} scale={0.6}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_4.geometry}
            material={nodes.Sphere_4.material}
            position={[32.38, 222.83, 77.07]}
            scale={0.38} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_3.geometry}
            material={nodes.Sphere_3.material}
            position={[-24.84, 224.06, 78.97]}
            scale={[0.38, 0.37, 0.38]} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_2.geometry}
            material={nodes.Sphere_2.material}
            position={[-149.72, -50.55, 13]}
            rotation={[0, 0, -0.18]}
            scale={[0.21, 1, 1]} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={nodes.Sphere.material}
            position={[151.39, -44.39, 13]}
            rotation={[0, 0, 0.18]}
            scale={[0.21, 1, 1]} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lathe_2.geometry}
            material={nodes.Lathe_2.material}
            position={[3.36, 205.76, 0]}
            scale={[2.2, 1.44, 2.2]} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lathe.geometry}
            material={nodes.Lathe.material}
            position={[1.8, -75.92, 0]}
            scale={[-3.01, 3.96, 3.01]} />
        </group>
        <directionalLight
          name="Directional Light"
          intensity={3.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[225.89, 300, 300]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={1.11}
          far={100000}
          near={-100000}
          position={[4.67, 74.28, 10581.84]}
          rotation={[0, 0, 0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}

useGLTF.preload('/shafiq.glb')
