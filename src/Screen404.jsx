import logo from './logo.svg';
import './assets/css/style.css';
import splashVid from './assets/404/error.webm'

function Screen404() {

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
                            <li><a href="#/about">About Me</a></li>
                            <li><a href="#/schoolProjects">School Projects</a></li>
                            <li><a href="#/homeProjects">Passion Projects</a></li>
                            <li><a href="#/achievements">Achievements</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="splash">
                <div className="overlay" />
                <video autoPlay muted className="bg">
                    <source src={splashVid} type="video/webm"/>
                </video>
            </div>
        </div>
    );
}

export default Screen404;
