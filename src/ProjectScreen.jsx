import logo from './logo.svg';
import splash from './assets/images/home/hello-splash.gif';
import './assets/css/style.css';

function ProjectScreen() {
    return (
        <div className="main-content">
            <div className="navbar-container">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>                        
                            </button>
                            <a className="navbar-brand-image" href="/">
                                    <img alt = "Logo" src = {logo} className = "navbar-brand-image" />
                            </a>
                            <a className="navbar-brand " href="/">
                            Kam Yau Shing
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">Home</a></li>
                            <li className="active"><a href="./projects">Projects</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="splash">
                <div className="overlay" />
                <img alt = "Splash bg" className="bg" />
                <img alt = "Big Hello" className="anim" src={splash} />
                <div className="down-arrow-container">
                    <a className="down-arrow" href="#intro">
                        <i className="fa-solid fa-arrow-down"></i>
                    </a>
                </div>
            </div>
            <div id="blah" className="grid-container grid-left">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>Title goes here</strong>
                    </p>
                    </div>
                <div className="grid-item grid-item-image">
                    <div className="image-overlay"></div>
                    <div className="grid-item-image-container">
                        <div className="grid-item-image-image-container"> 
                            <img alt="Goes here" className="grid-item-image-image-inside-container"/>
                        </div>
                        <p className="grid-item-image-caption">
                            Caption goes here <i class="fa-solid fa-arrow-turn-up"></i>
                        </p>
                    </div>
                    <img alt="Background" className="grid-item-image-image"/>
                </div>
                <div className="grid-item grid-item-body body-text">
                    Yap here
                </div>
            </div>
        </div>
    );
}

export default ProjectScreen;
