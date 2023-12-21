import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import Experience from './Experience.jsx'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas 
    dpr={1}
    gl={{
        antialias:true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace
    
    }}
    camera={{
        position:[3,2,6],
        near:0.1,
        far:100,
        fov:45
// zoom:100
    }}
    >
        <Experience/>
    </Canvas>
)