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
    const { nodes, materials, animations } = useGLTF('/12-dichloroethane_twist/scene.gltf')
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

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "material_0") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Graph</h1>
                <p className="text-xl">The graph shows the variation of relative energy.</p>
            </div>
        )
    }
    else if (snap.current === "material_2") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Chlorine</h1>
            </div>
        )
    }
    else if (snap.current === "material_1.001") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Carbon</h1>
            </div>
        )
    }
    else if (snap.current === "material_0_16") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Hydrogen</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of 12 Dichloroethane Twist 3D model to know more</h1>
                <p className="self-center mx-8 pb-4 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <Image className="rounded-xl " src="/twistImg.png" height="200" width="150" alt="QR Code" />
                    <a href="https://go.echo3d.co/tfgN" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500  hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function DichloroethaneTwist() {
    return (
        <>
            <Head>
                <title>12 Dichloroethane Twist</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="pt-8 text-white">

                <Link href="/explore" passHref>Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                        12 Dichloroethane Twist
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                    <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The chemical compound 1,2-dichloroethane, commonly known as ethylene dichloride (EDC), is a chlorinated hydrocarbon. It is a colourless liquid with a chloroform-like odour. The most common use of 1,2-dichloroethane is in the production of vinyl chloride, which is used to make polyvinyl chloride (PVC) pipes, furniture and automobile upholstery, wall coverings, housewares, and automobile parts. 12-dichloroethane-twist-1b392271722f49868456f48da8fe35b7) by Michael Aristov (https://sketchfab.com/Michael.Aristov) licensed under CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.2} />
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
