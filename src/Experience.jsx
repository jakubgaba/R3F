import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from '@react-three/drei'
import CustomObject from "./customObject";

/**
extend({OrbitControls}) 
 const {camera, gl}= useThree();
<orbitControls args={[camera, gl.domElement]}/>

This is used only for Orbit controls from @react-three/fiber
 *  */

export default function Experience() {

    const cubeRef = useRef();
    const groupRef = useRef();




    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
        //     const angle = state.clock.elapsedTime
        //    state.camera.position.x = Math.sin(angle) * 8
        //    state.camera.position.z = Math.cos(angle) * 8
        //    state.camera.lookAt(0,0,0)
    })

    return (
        <>
            <OrbitControls />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <group ref={groupRef}>
                <mesh position-x={-2}>
                    <sphereGeometry />
                    <meshStandardMaterial color='red' />
                </mesh>
                <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                    <boxGeometry scale={1.5} />
                    <meshStandardMaterial color='mediumpurple' />
                </mesh>
            </group>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>

            <CustomObject />
        </>
    );
}
