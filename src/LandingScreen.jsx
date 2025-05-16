import humanVid from './assets/landing/humanVid.webm'
import cityVid from './assets/landing/full.webm'
import './assets/css/style.css';
function LandingScreen() {
    return (
        <div className='main-content'>
            <div className="splash">
                <div className="landing-overlay" />
                <video autoPlay loop muted className="bg">
                    <source src={humanVid} type="video/webm"/>
                </video>
            </div>
            <div className="anyKey" onClick={() => window.open("https://yaushing.github.io/#/about", "_self")}>
                <p>
                    Press Any Key to Continue...
                </p>
            </div>
        </div>
    );
}

export default LandingScreen;