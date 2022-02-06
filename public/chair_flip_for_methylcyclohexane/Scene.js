/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Michael Aristov (https://sketchfab.com/Michael.Aristov)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/3d-models/chair-flip-for-methylcyclohexane-5c8cd1a462ce44f9af810b544b592b1a
title: Chair Flip for Methylcyclohexane
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[0.35, 0, 0.06]} scale={[0.15, 0.15, 0.15]}>
            <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
            <mesh geometry={nodes.Object_5.geometry} material={nodes.Object_5.material} />
          </group>
          <group position={[-1.27, 0.46, 0.73]} rotation={[-0.63, 0.95, 0.25]} scale={[0.15, 0.15, 0.15]}>
            <mesh geometry={nodes.Object_7.geometry} material={nodes.Object_7.material} />
            <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
          </group>
          <group position={[-1.27, 0, 2.2]} rotation={[-1.6, 0.05, -0.27]} scale={[0.15, 0.15, 0.15]}>
            <mesh geometry={nodes.Object_10.geometry} material={nodes.Object_10.material} />
            <mesh geometry={nodes.Object_11.geometry} material={nodes.Object_11.material} />
          </group>
          <group position={[0, 0.46, 2.93]} rotation={[1.63, 0, 0.34]} scale={[0.15, 0.15, 0.15]}>
            <mesh geometry={nodes.Object_13.geometry} material={nodes.Object_13.material} />
            <mesh geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
          </group>
          <group position={[1.27, 0, 2.2]} rotation={[-1.6, -0.05, -0.38]} scale={[0.15, 0.15, 0.15]}>
            <mesh geometry={nodes.Object_16.geometry} material={nodes.Object_16.material} />
            <mesh geometry={nodes.Object_17.geometry} material={nodes.Object_17.material} />
            <mesh geometry={nodes.Object_18.geometry} material={materials['material_1.011']} />
            <mesh geometry={nodes.Object_19.geometry} material={materials['material_0.010']} />
          </group>
          <group
            name="subnode_46_5"
            position={[1.27, 0.46, 0.73]}
            rotation={[1.54, -0.05, 0.36]}
            scale={[0.15, 0.15, 0.15]}>
            <mesh geometry={nodes.Object_21.geometry} material={nodes.Object_21.material} />
            <mesh geometry={nodes.Object_22.geometry} material={nodes.Object_22.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
