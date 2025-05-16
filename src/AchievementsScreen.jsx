import logo from './logo.svg';
import splash from './assets/projects/images/projects-splash.gif';
import './assets/css/style.css';
import Carousel from './prefabs/Carousel';
import Footer from './prefabs/Footer'

function AchievementsScreen() {
    const vw = document.documentElement.clientHeight;
    const scrollOne = () => {
        window.scrollBy(
            {
                top: vw - 50,
                left: 0,
                behavior : "smooth"
            }
        );
    }

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
                            <li><a href="#/projects">Projects</a></li>
                            <li className="active"><a href="#/achievements">Achievements</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="splash">
                <div className="overlay" />
                <img alt = "Splash bg" className="bg" />
                <img alt = "Big my projects" className="anim" src={splash} />
                <div className="down-arrow-container">
                    <div className="down-arrow">
                        <i className="fa-solid fa-arrow-down" onClick={() => scrollOne()}></i>
                    </div>
                </div>
            </div>
            <Carousel
                items={[
                    <div id="endeavour" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Astrophysics: The Astronaut Al Worden "Endeavour" Space Challenge</strong>
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
                    </div>,
                    <div id="endeavour" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Astrophysics: The Astronaut Al Worden "Endeavour" Scholarship</strong>
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
                    </div>,
                    <div id="endeavour" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Washington D.C.</strong>
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
                    </div>,
                    <div id="endeavour" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>International Space Camp</strong>
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
                ]}
            />
            <Carousel
                items={[
                    <div id="opportunity X" className="grid-container grid-right">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Biology / Research: The </strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Goes here" className="grid-item-image-image-inside-container"/>
                                </div>
                                <p className="grid-item-image-caption">
                                    <i class="fa-solid fa-arrow-turn-up fa-flip-horizontal"></i> Caption goes here 
                                </p>
                            </div>
                            <img alt="Background" className="grid-item-image-image"/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            Yap here
                        </div>
                    </div>
                ]}
            />
            <Footer />
        </div>
    );
}

export default AchievementsScreen;
