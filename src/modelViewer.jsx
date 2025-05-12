import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

export default function Model({props, source}) {
    const { nodes, materials } = useGLTF(source)
    useGLTF.preload(source)
    return (
        <group {...props} dispose={null}>
            <PerspectiveCamera makeDefault={true} far={1000} near={0.1} fov={22.895} position={[19.416, 3.855, 0]} rotation={[-Math.PI / 2, 1.364, Math.PI / 2]} />
            <spotLight intensity={5000} position={[0, 25, 0]} angle={0.15} penumbra={1} castShadow />
            <spotLight intensity={5000} position={[0, -25, 0]} angle={0.15} penumbra={1} castShadow />
            <spotLight intensity={5000} position={[0, 0, 25]} angle={0.15} penumbra={1} castShadow />
            <spotLight intensity={5000} position={[0, 0, -25]} angle={0.15} penumbra={1} castShadow />
            <spotLight intensity={5000} position={[25, 0, 0]} angle={0.15} penumbra={1} castShadow />
            <spotLight intensity={5000} position={[-25, 0, 0]} angle={0.15} penumbra={1} castShadow />
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
