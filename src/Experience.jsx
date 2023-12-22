import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Float, Text, OrbitControls, TransformControls, PivotControls, Html, MeshReflectorMaterial } from '@react-three/drei'
import CustomObject from "./customObject";

/**
extend({OrbitControls}) 
 const {camera, gl}= useThree();
<orbitControls args={[camera, gl.domElement]}/>

This is used only for Orbit controls from @react-three/fiber
 *  */

export default function Experience() {

    const cubeRef = useRef()
    const groupRef = useRef()
    const sphereRef = useRef()



    useFrame((state, delta) => {
        // cubeRef.current.rotation.y += delta
        //     const angle = state.clock.elapsedTime
        //    state.camera.position.x = Math.sin(angle) * 8
        //    state.camera.position.z = Math.cos(angle) * 8
        //    state.camera.lookAt(0,0,0)
    })


    return (
        <>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <group ref={groupRef}>


                <mesh ref={sphereRef} position-x={-2}>
                    <sphereGeometry />
                    <meshStandardMaterial color='red' />
                    <Html
                        position={[1, 1, 0]}
                        wrapperClass="label"
                        center
                        distanceFactor={6}
                        occlude={[sphereRef, cubeRef]}
                    >Yeah</Html>
                </mesh>
                <TransformControls object={sphereRef} mode="translate" />

                <PivotControls
                    anchor={[0, 0, 0]}
                    depthTest={false}
                    lineWidth={4}
                >
                    <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                        <boxGeometry scale={1.5} />
                        <meshStandardMaterial color='mediumpurple' />
                    </mesh>
                </PivotControls>

            </group>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                {/* <meshStandardMaterial color='greenyellow' /> */}
                <MeshReflectorMaterial
                resolution={512}
                />
            </mesh>
            <CustomObject />
            <Float>
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    position-y={2}
                    textAlign="center"
                >I love Maria</Text>
            </Float>

            <Float ></Float>
            
        </>
    );
}
