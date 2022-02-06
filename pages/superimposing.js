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
  const { nodes, materials, animations } = useGLTF('/superimposing_dichloroiodomethane_mirror_images/scene.gltf')
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
      <group position={[-0.78, -0.75, -0.03]} rotation={[0, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group name="subnode_0_1" position={[0, 0, 2.5]} rotation={[-Math.PI / 2, 0, 0]} scale={0.43}>
            <mesh geometry={nodes.Object_9.geometry} material={materials.material_1} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.material_2} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.material_0} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.material_3} />
          </group>
          <group position={[0, 0, -2.5]} rotation={[Math.PI / 2, 0, 0]} scale={0.44}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['material_1.001']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['material_2.001']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['material_0.001']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['material_3.001']} />
          </group>
        </group>
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)
  if (snap.current === "material_3") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Iodine</h1>
      </div>
    )
  }
  else if (snap.current === "material_1") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Carbon</h1>
      </div>
    )
  }
  else if (snap.current === "material_2") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">CHLORINE</h1>
      </div>
    )
  }
  else if (snap.current === "material_0") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Hydrogen</h1>
      </div>
    )
  }
  else if (snap.current === "material_3.001") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Mirron image of Iodine</h1>
      </div>
    )
  }
  else if (snap.current === "material_2.001") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Mirror image of Chlorine</h1>
      </div>
    )
  }
  else if (snap.current === "material_1.001") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Mirron image of Carbon</h1>
      </div>
    )
  }
  else if (snap.current === "material_0.001") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Mirror image of Hydrogen</h1>
      </div>
    )
  }
  else {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-2xl tracking-wider">Click on diffrent parts of Superimposing Dichloroiodomethane Mirror Images 3D model to know more</h1>
        <p className="self-center mx-8 pb-4 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

        <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
          <Image className="rounded-xl " src="/chairFlipImg.png" height="200" width="150" alt="QR Code" />
          <a href="https://go.echo3d.co/Agsp" target="_blank" rel="noreferrer">
            <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500  hover:shadow-lg">View in AR</button>
          </a>
        </div>
      </div>
    )
  }
}

export default function Superimposing() {
  return (
    <>
      <Head>
        <title>Superimposing Dichloroiodomethane Mirror Images</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-8 text-white">

        <Link href="/explore" passHref>Go Back</Link>

        <div className="grid w-full py-10 place-items-center">
          <h1 className="pb-2 text-xl font-semibold tracking-wide font-carattere lg:text-4xl">
            Superimposing Dichloroiodomethane Mirror Images
          </h1>
          <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
          <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Superimposing mirror images of Dichloroiodomethane. This work is based on &quot; Superimposing Dichloroiodomethane Mirror Images &quot; (https://sketchfab.com/3d-models/superimposing-dichloroiodomethane-mirror-images-09919717a9c14ca2a19d37682a62d9a2) by Michael Aristov (https://sketchfab.com/Michael.Aristov) licensed under CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)</div>
        </div>

        <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

          <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.7} />
              <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Suspense fallback={null}>
                <Model scale={0.3} />
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
