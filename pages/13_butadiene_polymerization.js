import React, { Suspense, useRef, useState } from "react"
import Link from "next/link"
import Head from 'next/head'
import Image from "next/image"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
})

function Model({ ...props }) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/13-butadiene_polymerization/scene.gltf')
  const { actions } = useAnimations(animations, group)
  const [hovered, set] = useState(null)
  console.log(hovered)
  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
    >
      <group position={[-3.79, 0, 4.95]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[5.25, 6.75, 5.16]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3}>
            <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
          </group>
          <group position={[5.46, 6.75, 5.16]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3}>
            <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
          </group>
          <group position={[5.46, 6.75, 5.16]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3}>
            <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
          </group>
          <group position={[5.46, 6.75, 5.16]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3}>
            <mesh geometry={nodes.Object_10.geometry} material={nodes.Object_10.material} />
          </group>
          <group position={[5.46, 6.75, 5.16]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={3}>
            <mesh geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
          </group>
          <group position={[-0.77, 0.1, 0.06]} scale={0.43}>
            <mesh geometry={nodes.Object_16.geometry} material={materials['material_1.020']} />
            <mesh geometry={nodes.Object_17.geometry} material={nodes.Object_17.material} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.material_0_3} />
            <mesh geometry={nodes.Object_19.geometry} material={materials['material_1.011']} />
            <mesh geometry={nodes.Object_20.geometry} material={materials['material_1.005']} />
            <mesh geometry={nodes.Object_21.geometry} material={materials['material_1.009']} />
            <mesh geometry={nodes.Object_22.geometry} material={materials['material_1.008']} />
            <mesh geometry={nodes.Object_23.geometry} material={materials['material_1.004']} />
            <mesh geometry={nodes.Object_24.geometry} material={materials['material_1.021']} />
            <mesh geometry={nodes.Object_25.geometry} material={materials['material_1.022']} />
            <mesh geometry={nodes.Object_26.geometry} material={materials['material_1.010']} />
            <mesh geometry={nodes.Object_27.geometry} material={materials['material_1.007']} />
            <mesh geometry={nodes.Object_28.geometry} material={materials['material_1.006']} />
            <mesh geometry={nodes.Object_29.geometry} material={materials['material_1.013']} />
            <mesh geometry={nodes.Object_30.geometry} material={materials['material_1.003']} />
          </group>
          <group position={[-1.67, -0.31, -1.91]} rotation={[0, -1.19, -0.13]} scale={0}>
            <mesh geometry={nodes.Object_32.geometry} material={nodes.Object_32.material} />
          </group>
          <group position={[-0.98, -0.64, 2.27]} rotation={[-Math.PI, -1.5, 3.12]} scale={0}>
            <mesh geometry={nodes.Object_34.geometry} material={nodes.Object_34.material} />
          </group>
          <group position={[-1.67, -0.31, -1.91]} rotation={[0, -1.24, -0.13]} scale={0}>
            <mesh geometry={nodes.Object_36.geometry} material={nodes.Object_36.material} />
          </group>
          <group position={[-0.98, -0.64, 2.27]} rotation={[0, -1.24, -0.13]} scale={0}>
            <mesh geometry={nodes.Object_38.geometry} material={nodes.Object_38.material} />
          </group>
          <group
            name="subnode_11_18"
            position={[-0.25, 0, 19.37]}
            rotation={[-Math.PI, 1.12, 0.02]}
            scale={[0.13, 0.13, 0.14]}>
            <group position={[0, 0, 3.95]} rotation={[0, 0.49, 0]} scale={[3.21, 3.24, 3.14]}>
              <mesh geometry={nodes.Object_43.geometry} material={materials['material_1.016']} />
              <mesh geometry={nodes.Object_44.geometry} material={materials['material_1.035']} />
              <mesh geometry={nodes.Object_45.geometry} material={nodes.Object_45.material} />
            </group>
            <group position={[5.01, 0, 6.29]} rotation={[3.14, -1.12, 3.14]} scale={[0.97, 1, 2.48]}>
              <mesh geometry={nodes.Object_47.geometry} material={nodes.Object_47.material} />
            </group>
            <group position={[-12.38, 0, 6.31]} rotation={[0, 0.98, 0]} scale={[0.97, 1, 1.03]}>
              <mesh geometry={nodes.Object_49.geometry} material={nodes.Object_49.material} />
              <mesh geometry={nodes.Object_50.geometry} material={nodes.Object_50.material} />
            </group>
            <group position={[-9.76, 0, 13.81]} rotation={[-Math.PI, 0.14, 3.14]} scale={[1, 1, 3.35]}>
              <mesh geometry={nodes.Object_52.geometry} material={nodes.Object_52.material} />
            </group>
            <group position={[-8.97, 0, 8.52]} rotation={[0, 0.49, 0]} scale={[3.21, 3.24, 3.14]}>
              <group position={[-2.03, 0, 2.95]} rotation={[-1.26, -0.74, -1.12]}>
                <mesh geometry={nodes.Object_56.geometry} material={materials['material_1.026']} />
              </group>
              <mesh geometry={nodes.Object_54.geometry} material={materials['material_1.017']} />
            </group>
            <group position={[10.03, 0, 8.63]} rotation={[0, 0.49, 0]} scale={[3.21, 3.24, 3.14]}>
              <mesh geometry={nodes.Object_58.geometry} material={materials['material_1.015']} />
            </group>
            <mesh geometry={nodes.Object_40.geometry} material={nodes.Object_40.material} />
            <mesh geometry={nodes.Object_41.geometry} material={nodes.Object_41.material} />
          </group>
          <group position={[1.45, 0.04, 16.44]} rotation={[0, 1.47, 0]} scale={[0.13, 0.13, 0.14]}>
            <mesh geometry={nodes.Object_60.geometry} material={nodes.Object_60.material} />
            <mesh geometry={nodes.Object_61.geometry} material={nodes.Object_61.material} />
          </group>
          <group position={[1.98, 0.02, 17.2]} rotation={[-3.14, -0.38, -3.14]} scale={[0.13, 0.13, 0.14]}>
            <mesh geometry={nodes.Object_63.geometry} material={nodes.Object_63.material} />
            <mesh geometry={nodes.Object_64.geometry} material={nodes.Object_64.material} />
          </group>
          <group position={[1.9, -0.03, 19.85]} rotation={[3.14, 0.38, -3.14]} scale={[0.13, 0.13, 0.14]}>
            <mesh geometry={nodes.Object_66.geometry} material={nodes.Object_66.material} />
            <mesh geometry={nodes.Object_67.geometry} material={nodes.Object_67.material} />
          </group>
          <group position={[1.32, -0.03, 20.57]} rotation={[0, -1.47, 0]} scale={[0.13, 0.13, 0.14]}>
            <mesh geometry={nodes.Object_69.geometry} material={nodes.Object_69.material} />
            <mesh geometry={nodes.Object_70.geometry} material={nodes.Object_70.material} />
          </group>
          <group position={[0.86, 0.01, 18.47]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_72.geometry} material={nodes.Object_72.material} />
          </group>
          <group position={[0.86, 0.01, 18.47]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_74.geometry} material={nodes.Object_74.material} />
          </group>
          <group position={[0.26, 0.01, 18.47]} rotation={[0, Math.PI / 2, 0]} scale={0}>
            <mesh geometry={nodes.Object_76.geometry} material={materials['material_0.002']} />
            <mesh geometry={nodes.Object_77.geometry} material={materials['material_0.005']} />
          </group>
          <group position={[1.66, 0.03, 16.69]} rotation={[-0.01, 0.02, -0.03]} scale={[0, 0, 0.8]}>
            <mesh geometry={nodes.Object_79.geometry} material={nodes.Object_79.material} />
          </group>
          <group position={[1.39, -0.03, 20.36]} rotation={[-3.13, -0.02, 3.11]} scale={[0, 0, 0.8]}>
            <mesh geometry={nodes.Object_81.geometry} material={materials['material_1.001']} />
          </group>
          <group position={[1.56, 0.03, 16.98]} rotation={[-Math.PI / 2, 0, 0]} scale={0}>
            <mesh geometry={nodes.Object_83.geometry} material={nodes.Object_83.material} />
          </group>
          <group position={[1.56, 0.03, 16.98]} rotation={[1.52, 0.12, -0.06]} scale={0}>
            <mesh geometry={nodes.Object_85.geometry} material={nodes.Object_85.material} />
          </group>
          <group position={[0.28, 0.02, 17.8]} rotation={[-Math.PI / 2, 0, 0]} scale={0}>
            <mesh geometry={nodes.Object_87.geometry} material={nodes.Object_87.material} />
          </group>
          <group position={[0.28, 0.02, 17.8]} rotation={[1.52, 0.12, -0.06]} scale={0}>
            <mesh geometry={nodes.Object_89.geometry} material={nodes.Object_89.material} />
          </group>
          <group position={[0.23, 0, 19.14]} rotation={[Math.PI / 2, 0, 0]} scale={0}>
            <mesh geometry={nodes.Object_91.geometry} material={nodes.Object_91.material} />
          </group>
          <group position={[0.23, 0, 19.14]} rotation={[1.52, 0.12, -0.06]} scale={0}>
            <mesh geometry={nodes.Object_93.geometry} material={nodes.Object_93.material} />
          </group>
          <group position={[1.39, -0.03, 20.04]} rotation={[Math.PI / 2, 0, 0]} scale={0}>
            <mesh geometry={nodes.Object_95.geometry} material={nodes.Object_95.material} />
          </group>
          <group position={[1.39, -0.03, 20.04]} rotation={[1.52, 0.12, -0.06]} scale={0}>
            <mesh geometry={nodes.Object_97.geometry} material={nodes.Object_97.material} />
          </group>
          <group position={[0, 0, 4.23]} rotation={[-3.13, 0, 3.11]} scale={0}>
            <mesh geometry={nodes.Object_115.geometry} material={nodes.Object_115.material} />
          </group>
          <group position={[1.64, 0, 16.05]} rotation={[0, -0.02, 0]} scale={0}>
            <mesh geometry={nodes.Object_117.geometry} material={materials['material_1.034']} />
          </group>
          <group position={[5.46, 7.82, 5.9]} scale={[0.1, 2, 2]}>
            <mesh geometry={nodes.Object_12.geometry} material={nodes.Object_12.material} />
          </group>
          <group position={[1.68, 3.81, 14.98]} rotation={[Math.PI / 2, 0, Math.PI]}>
            <mesh geometry={nodes.Object_99.geometry} material={nodes.Object_99.material} />
          </group>
          <group position={[0, 0, 15.49]} scale={[4.18, 3.02, 0.04]}>
            <mesh geometry={nodes.Object_101.geometry} material={nodes.Object_101.material} />
          </group>
          <group position={[0, 0, 20.06]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-4.38, 3.22, 1.26]}>
            <mesh geometry={nodes.Object_103.geometry} material={nodes.Object_103.material} />
          </group>
          <group position={[0, 0, -4.94]} scale={[4.18, 3.02, 0.04]}>
            <group position={[0, 0.04, -86.75]} scale={[1.05, 1.11, 105.25]}>
              <mesh geometry={nodes.Object_107.geometry} material={nodes.Object_107.material} />
            </group>
            <group position={[0, 1.38, 6.5]} scale={[1.05, 0.3, 2.5]}>
              <mesh geometry={nodes.Object_109.geometry} material={nodes.Object_109.material} />
            </group>
            <group position={[-0.37, 1.29, 13]} rotation={[Math.PI / 2, 0, 0]} scale={[0.24, 611.5, 0.33]}>
              <mesh geometry={nodes.Object_111.geometry} material={nodes.Object_111.material} />
            </group>
            <mesh geometry={nodes.Object_105.geometry} material={nodes.Object_105.material} />
          </group>
          <group position={[0, 0, -4.71]} scale={[4.18, 3.02, 0.04]}>
            <mesh geometry={nodes.Object_113.geometry} material={nodes.Object_113.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)
  if (snap.current === "material_0_3") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Hydrogn</h1>
      </div>
    )
  }
  else if (snap.current === "material_1.003") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Carbon</h1>
      </div>
    )
  }
  else {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-2xl tracking-wider">Click on diffrent parts of 13 Butadiene Polymerization 3D model to know more</h1>
        <p className="self-center mx-8 pb-4 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

        <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
          <Image className="rounded-xl " src="/dichloroethane.png" height="200" width="150" alt="QR Code" />
          <a href="https://go.echo3d.co/7w2r" target="_blank" rel="noreferrer">
            <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500  hover:shadow-lg">View in AR</button>
          </a>
        </div>
      </div>
    )
  }
}

export default function ButadienePolymerization() {
  return (
    <>
      <Head>
        <title>13 Butadiene Polymerization</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-8 text-white">

        <Link href="/explore" passHref>Go Back</Link>

        <div className="grid w-full py-10 place-items-center">
          <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
            13 Butadiene Polymerization
          </h1>
          <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
          <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Polybutadiene forms by linking many 1,3-butadiene monomers to make a much longer polymer chain molecule. In terms of the connectivity of the polymer chain, butadiene can polymerize in three different ways, called cis, trans and vinyl. This work is based on &quot; 1,3-Butadiene polymerization &quot; (https://sketchfab.com/3d-models/13-butadiene-polymerization-aca5bbe0db364290a9b7a233130cd83f) by Michael Aristov (https://sketchfab.com/Michael.Aristov) licensed under CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)</div>
        </div>

        <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

          <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.7} />
              <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Suspense fallback={null}>
                <Model scale={0.09} />
                <Environment preset="city" />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>

          <div className="mt-16 md:mt-0 md:col-span-1 p-4">
            <Details />
          </div>

        </div>

      </div>

    </>
  )
}
