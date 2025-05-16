import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

export default function Model({ props, source }) {
    const groupRef = useRef()
    const cameraRef = useRef()

    // Load the GLTF
    const { scene, animations } = useGLTF(source)
    const { actions } = useAnimations(animations, groupRef)

    // Position the camera to frame the model from the left side
    useEffect(() => {
        if (!groupRef.current || !cameraRef.current) return

        const box = new THREE.Box3().setFromObject(groupRef.current)
        const size = new THREE.Vector3()
        const center = new THREE.Vector3()
        box.getSize(size)
        box.getCenter(center)

        const fov = THREE.MathUtils.degToRad(22.895)
        const maxDim = Math.max(size.x, size.y, size.z)
        const distance = maxDim / (2 * Math.tan(fov / 2))

        cameraRef.current.position.set(center.x + distance * 1.2, center.y, center.z)
        cameraRef.current.lookAt(center)
    }, [source])

    // Play all animations if present
    useEffect(() => {
        if (!actions) return
        Object.values(actions).forEach((action) => {
            action.reset().play()
        })
    }, [actions])

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                fov={22.895}
                near={0.1}
                far={1000}
            />

            {/* Ambient light for base illumination */}
            <ambientLight intensity={0.4} />

            {/* Hemisphere light for natural sky/ground lighting */}
            <hemisphereLight
                intensity={0.6}
                skyColor="#e0e0ff"
                groundColor="#444444"
                position={[0, 50, 0]}
            />

            {/* Key light (main directional light) */}
            <directionalLight
                castShadow
                intensity={1.0}
                position={[10, 15, 10]}
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
                shadow-camera-near={1}
                shadow-camera-far={50}
                shadow-camera-left={-15}
                shadow-camera-right={15}
                shadow-camera-top={15}
                shadow-camera-bottom={-15}
            />

            {/* Fill light to soften shadows */}
            <pointLight
                intensity={0.3}
                position={[-10, 5, -10]}
            />

            {/* Rim light to highlight edges */}
            <spotLight
                intensity={0.3}
                position={[-10, 10, 10]}
                angle={0.3}
                penumbra={0.5}
            />

            {/* GLTF scene contents */}
            <primitive object={scene} />

            <OrbitControls />
        </group>
    )
}
