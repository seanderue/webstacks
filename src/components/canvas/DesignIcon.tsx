/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
import { animated } from '@react-spring/three'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/design-icon.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.08}>
        <group scale={0.74}>
          <group position={[19.53, 2.58, 70.54]}>
            <mesh
              castShadow
              receiveShadow
              // @ts-ignore
              geometry={nodes.Rectangle005.geometry}
              material={materials.whiteish}
              position={[-18.69, 1.13, -0.03]}
              rotation={[-1.56, 0, -1.57]}
              scale={[0.31, 1.46, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              // @ts-ignore
              geometry={nodes.Rectangle006.geometry}
              material={materials['Steel Blue']}
              position={[48.03, 1.19, -0.04]}
              rotation={[-1.56, 0, -1.57]}
              scale={[0.31, 0.48, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              // @ts-ignore
              geometry={nodes.Rectangle007.geometry}
              material={materials['Steel Blue']}
              position={[0, -8.06, -0.05]}
              rotation={[-1.56, 0, -1.57]}
              scale={[0.31, 1.46, 1]}
            />
          </group>
          <group position={[21.59, 9.08, -1.07]}>
            <group position={[-24.91, 0, 0.13]}>
              <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.Ellipse001.geometry}
                material={materials.whiteish}
                position={[0, -2.93, 0]}
                rotation={[-1.55, 0, -Math.PI / 2]}
                scale={0.66}
              />
              <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.Pointer001.geometry}
                material={materials['Steel Blue']}
                position={[19.78, 14.79, 18.97]}
                rotation={[-Math.PI, 0.78, -Math.PI]}
                scale={0.56}
              />
              <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.Rectangle004.geometry}
                material={materials['Deep Blue.001']}
                position={[0, -14.08, -0.05]}
                rotation={[-1.56, 0, -1.57]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              // @ts-ignore
              geometry={nodes.Merged_Geometry001.geometry}
              material={materials.whiteish}
              position={[52.91, -7.66, -0.14]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/design-icon.glb')
