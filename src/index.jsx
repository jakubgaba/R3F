import './style.scss'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import Experience from './Experience.jsx'
import { StrictMode } from 'react'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Canvas
            dpr={1}
            gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                outputColorSpace: THREE.SRGBColorSpace

            }}
            camera={{
                position: [3, 2, 6],
                near: 0.1,
                far: 100,
                fov: 45
            }}
        >
            <Experience />
        </Canvas>
    </StrictMode>
)