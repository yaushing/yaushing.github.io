import { Canvas } from '@react-three/fiber';
import Model from './modelViewer.jsx';
function LandingScreen() {
    return (
        <div className='main-content'>
            <a href="/#/home" style={{textAlign:"center"}} className="btn btn-success">Start</a>
            <Canvas>
                <Model 
                    source={"/assets/3dModels/modernRecurve-transformed.glb"}
                />
            </Canvas>
        </div>
    );
}

export default LandingScreen;