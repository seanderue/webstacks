import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/build-icon3.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.11}>
        <group position={[0, 43.51, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.22}>
          <group position={[19.76, 11.27, 14.06]}>
            <group position={[-23.34, -32.62, 2.05]}>
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.Text_2.geometry}
                material={materials['Steel Blue']}
                position={[-8.5, -5.06, -2]}
              />
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.Text001.geometry}
                material={materials['Steel Blue']}
                position={[0, 5.06, -2]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              //@ts-ignore
              geometry={nodes.Merged_Geometry002.geometry}
              material={materials['Deep Blue.001']}
              position={[0.89, -4.36, -9.63]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.82}
            />
            <mesh
              castShadow
              receiveShadow
              //@ts-ignore
              geometry={nodes.Merged_Geometry003.geometry}
              material={materials.whiteish}
              position={[0.89, -4.36, -2.84]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <group position={[-13.14, 16.2, 8.14]} rotation={[0, 0.21, 0]}>
            <mesh
              castShadow
              receiveShadow
              //@ts-ignore
              geometry={nodes.Merged_Geometry_2.geometry}
              material={materials.whiteish}
              position={[0.46, 0, 1.44]}
              rotation={[Math.PI / 2, 0, 0.21]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            //@ts-ignore
            geometry={nodes.Bottom_Rect.geometry}
            material={materials.whiteish}
            position={[0.11, -20.94, -4.52]}
          />
          <mesh
            castShadow
            receiveShadow
            //@ts-ignore
            geometry={nodes.Top_Cube.geometry}
            material={materials['Deep Blue.001']}
            position={[-15.51, 16.35, -7.61]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/build-icon3.glb')
