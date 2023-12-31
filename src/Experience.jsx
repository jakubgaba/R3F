import { useFrame, useThree, extend } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import Cube from "./shapes/Cube";
import { useControls } from "leva";
/**
extend({OrbitControls}) 
 const {camera, gl}= useThree();
<orbitControls args={[camera, gl.domElement]}/>

This is used only for Orbit controls from @react-three/fiber
 *  */

// <orbitControls args={[camera, gl.domElement]} />

export default function Experience() {

    const groupRef = useRef()
    const sphereRef = useRef()
    const controls = useControls({
        position: -2
    }) 
   

    useFrame((state, delta) => {
        // cubeRef.current.rotation.y += delta
        //     const angle = state.clock.elapsedTime
        //    state.camera.position.x = Math.sin(angle) * 8
        //    state.camera.position.z = Math.cos(angle) * 8
        //    state.camera.lookAt(0,0,0)
    })


    return (
        <>
            <OrbitControls makeDefault/>

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <group ref={groupRef}>

                <mesh ref={sphereRef} position-x={-2}>
                    <sphereGeometry />
                    <meshStandardMaterial color='red' />
                </mesh>

            </group>

            <Cube/>

            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow'/>
            </mesh>

        </>
    );
}
