import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

export default function Icon(props) {
  const { nodes } = useGLTF('/optimize-icon3.gltf')
  const materialWhite = new THREE.MeshStandardMaterial()
  const materialBlue = new THREE.MeshStandardMaterial()
  const materialSteel = new THREE.MeshStandardMaterial()

  return (
    <group {...props} dispose={null}>
      <group rotation={[-2.57, -0, -0.3]} position={[1, 0, 4.5]} scale={0.13}>
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Big_Slice_low.geometry}
          material={materialWhite}
          material-color={'#D8DCE7'}
          position={[5.7, -0.77, 8.85]}
          scale={0.8}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Med_Slice_Top_Right.geometry}
          material={materialSteel}
          material-color={'#C0CBE9'}
          position={[2.59, -3.46, 13.52]}
          rotation={[0.04, 0, 1.62]}
          scale={[0.8, 0.82, 1.23]}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Merged_Geometry_2.geometry}
          material={materialBlue}
          material-color={'#282DF6'}
          position={[3.12, 9.09, 20.57]}
          rotation={[1.57, 0, 0]}
          scale={0.83}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/optimize-icon3.gltf')
