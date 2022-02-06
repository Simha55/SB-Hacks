/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Michael Aristov (https://sketchfab.com/Michael.Aristov)
license: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
source: https://sketchfab.com/3d-models/12-dichloroethane-twist-1b392271722f49868456f48da8fe35b7
title: 1,2-Dichloroethane Twist
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.59, 1.59, -0.73]} rotation={[0, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group name="Sphere_5" position={[-1.02, -0.02, -1.74]} scale={0.08}>
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.018']} />
          </group>
          <group position={[0, 1, 6.26]} rotation={[-Math.PI, 0.67, -Math.PI]} scale={[0.15, 0.15, 0.36]}>
            <mesh geometry={nodes.Object_56.geometry} material={nodes.Object_56.material} />
            <mesh geometry={nodes.Object_57.geometry} material={nodes.Object_57.material} />
            <mesh geometry={nodes.Object_58.geometry} material={nodes.Object_58.material} />
            <mesh geometry={nodes.Object_59.geometry} material={nodes.Object_59.material} />
          </group>
          <group position={[-0.03, 1.31, -5.88]} rotation={[-Math.PI, 0.67, -Math.PI]} scale={[0.15, 0.15, 0.36]}>
            <mesh geometry={nodes.Object_61.geometry} material={nodes.Object_61.material} />
            <mesh geometry={nodes.Object_62.geometry} material={nodes.Object_62.material} />
            <mesh geometry={nodes.Object_63.geometry} material={nodes.Object_63.material} />
            <mesh geometry={nodes.Object_64.geometry} material={nodes.Object_64.material} />
          </group>
          <group position={[-0.34, -0.03, -0.32]} scale={[2.05, 0.01, 2.93]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
          </group>
          <group position={[-1.34, 0, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.01, 2.01, 0.01]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} />
          </group>
          <group position={[-2.18, 0.01, -2.75]} rotation={[0, -Math.PI / 2, 0]} scale={[0.35, 1, 0.35]}>
            <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
          </group>
          <group position={[-1.75, 0.01, -2.75]} scale={[0.35, 1, 0.35]}>
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.006']} />
          </group>
          <group position={[0, 0, -2]} rotation={[0, 0, -Math.PI / 2]} scale={[0.01, 1.35, 0.01]}>
            <mesh geometry={nodes.Object_14.geometry} material={materials['Material.007']} />
          </group>
          <group position={[-1.38, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_16.geometry} material={materials['Material.008']} />
          </group>
          <group position={[-1.38, 0, -0.58]} rotation={[0, 0, -Math.PI / 2]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_18.geometry} material={materials['Material.009']} />
          </group>
          <group position={[-1.38, 0, 1.16]} rotation={[0, 0, -Math.PI / 2]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_20.geometry} material={materials['Material.010']} />
          </group>
          <group position={[-1.38, 0, -1.16]} rotation={[0, 0, -Math.PI / 2]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_22.geometry} material={materials['Material.011']} />
          </group>
          <group position={[-1.38, 0, 1.74]} rotation={[0, 0, -Math.PI / 2]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_24.geometry} material={materials['Material.012']} />
          </group>
          <group position={[-1.38, 0, -1.74]} rotation={[0, 0, -Math.PI / 2]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_26.geometry} material={materials['Material.013']} />
          </group>
          <group position={[-1.43, 0.01, 0.05]} rotation={[0, Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_28.geometry} material={nodes.Object_28.material} />
          </group>
          <group position={[-1.57, 0.01, -0.74]} rotation={[0, -Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_30.geometry} material={nodes.Object_30.material} />
          </group>
          <group position={[-1.57, 0.01, 0.48]} rotation={[0, -Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_32.geometry} material={nodes.Object_32.material} />
          </group>
          <group position={[-1.57, 0.01, 1.02]} rotation={[0, -Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_34.geometry} material={nodes.Object_34.material} />
          </group>
          <group position={[-1.57, 0.01, -1.37]} rotation={[0, -Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_36.geometry} material={nodes.Object_36.material} />
          </group>
          <group position={[-1.57, 0.01, 1.59]} rotation={[0, -Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_38.geometry} material={nodes.Object_38.material} />
          </group>
          <group position={[-1.57, 0.01, -1.95]} rotation={[0, -Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_40.geometry} material={nodes.Object_40.material} />
          </group>
          <group position={[-0.95, 0.01, -2.15]} rotation={[0, Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_42.geometry} material={nodes.Object_42.material} />
          </group>
          <group position={[-1.01, 0, -2.04]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_44.geometry} material={materials['Material.015']} />
          </group>
          <group position={[-0.12, 0.01, -2.35]} rotation={[0, -Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_46.geometry} material={nodes.Object_46.material} />
          </group>
          <group position={[-0.05, 0, -2.04]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_48.geometry} material={materials['Material.016']} />
          </group>
          <group position={[0.84, 0.01, -2.35]} rotation={[0, -Math.PI / 2, 0]} scale={[0.2, 1, 0.2]}>
            <mesh geometry={nodes.Object_50.geometry} material={nodes.Object_50.material} />
          </group>
          <group position={[0.92, 0, -2.04]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_52.geometry} material={materials['Material.017']} />
          </group>
          <group position={[0, -0.99, 0]} scale={[1, 0.98, 0.5]}>
            <mesh geometry={nodes.Object_54.geometry} material={nodes.Object_54.material} />
          </group>
          <group position={[0, 1, 5.5]} rotation={[0, 0.68, 0]} scale={[0.43, 0.43, 0.43]}>
            <mesh geometry={nodes.Object_66.geometry} material={nodes.Object_66.material} />
            <mesh geometry={nodes.Object_67.geometry} material={nodes.Object_67.material} />
            <mesh geometry={nodes.Object_68.geometry} material={nodes.Object_68.material} />
            <mesh geometry={nodes.Object_69.geometry} material={nodes.Object_69.material} />
          </group>
          <group position={[-0.03, 0.56, -5.93]} rotation={[-1.46, 0.67, -0.07]} scale={[0.43, 0.43, 0.43]}>
            <mesh geometry={nodes.Object_71.geometry} material={nodes.Object_71.material} />
            <mesh geometry={nodes.Object_72.geometry} material={nodes.Object_72.material} />
            <mesh geometry={nodes.Object_73.geometry} material={nodes.Object_73.material} />
            <mesh geometry={nodes.Object_74.geometry} material={nodes.Object_74.material} />
          </group>
          <group position={[-1.38, 0, 0.58]} rotation={[0, 0, -Math.PI / 2]} scale={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_76.geometry} material={materials['Material.003']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
