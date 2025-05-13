import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

export default function Model({props, source}) {
    const { nodes, materials } = useGLTF(source)
    useGLTF.preload(source)
    return (
        <group {...props} dispose={null}>
            <PerspectiveCamera makeDefault={true} far={1000} near={0.1} fov={22.895} position={[19.416, 3.855, 0]} rotation={[-Math.PI / 2, 1.364, Math.PI / 2]} />
            <ambientLight intensity={0.7} />

            {/* Hemisphere light to simulate sky and ground lighting */}
            <hemisphereLight 
                intensity={0.9} 
                skyColor="#ffffff" 
                groundColor="#444444" 
                position={[0, 50, 0]} 
            />

            {/* Optional: A gentle directional light for subtle depth */}
            <directionalLight 
                intensity={0.9} 
                position={[5, 10, 5]} 
                castShadow 
                shadow-mapSize-width={1024} 
                shadow-mapSize-height={1024}
            />
            {Object.keys(nodes).map((key) => {
                const node = nodes[key]
                if (node.isMesh) {
                    const material = materials[node.material.name]
                    return (
                            <mesh
                                key={key}
                                geometry={node.geometry}
                                material={material}
                                rotation={node.rotation || [0, 0, 0]}
                                position={node.position || [0, 0, 0]}
                            />
                        )
                }
                return null
            })}
            <OrbitControls />
        </group>
    )
}
