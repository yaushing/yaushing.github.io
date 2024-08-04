import logo from './logo.svg';
import splash from './assets/images/home/hello-splash.gif';
import archery from './assets/images/home/archery.jpg';
import archerycrop from './assets/images/home/archery-crop.jpg';
import './assets/css/style.css';

function HomeScreen() {
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
                            WebSiteName
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="#body">Home</a></li>
                            <li><a href="#body">Page 2</a></li>
                            <li><a href="#body">Page 3</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="splash">
                <img alt = "Big Hello" src={splash} />
                <div className="down-arrow-container">
                    <a className="down-arrow" href="#intro">
                        <i className="fa-solid fa-arrow-down"></i>
                    </a>
                </div>
            </div>
            <div id="archery" className="grid-container grid-left">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>I'm an archer <i class="fa-solid fa-bullseye"></i></strong>
                    </p>
                    </div>
                <div className="grid-item grid-item-image">
                    <div className="image-overlay"></div>
                    <div className="grid-item-image-container">
                        <div className="grid-item-image-image-container"> 
                            <img alt="Archery" className="grid-item-image-image-inside-container" src={archery}/>
                        </div>
                        <p className="grid-item-image-caption">
                            Me shooting my mordern recurve <i class="fa-solid fa-arrow-turn-up"></i>
                        </p>
                    </div>
                    <img alt="Archery" className="grid-item-image-image" src={archerycrop}/>
                </div>
                <div className="grid-item grid-item-body body-text">
                    Although I only started learning in January 2024, I was obsessed with it. Now, I can shoot with all three major disciplines: Compound, Modern Recurve, and Traditional. With the modern Recuve, I can consistently land arrows within 12 centimeter diameter at 18 metres; with the Compound, 30, and with the Traditional, 12.
                </div>
            </div>
            <div id="coder" className="grid-container grid-right">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>I'm an archer <i class="fa-solid fa-bullseye"></i></strong>
                    </p>
                    </div>
                <div className="grid-item grid-item-image">
                    <div className="image-overlay"></div>
                    <div className="grid-item-image-container">
                        <div className="grid-item-image-image-container"> 
                            <img alt="Archery" className="grid-item-image-image-inside-container" src={archery}/>
                        </div>
                        <p className="grid-item-image-caption">
                            Me shooting my mordern recurve <i class="fa-solid fa-arrow-turn-up"></i>
                        </p>
                    </div>
                    <img alt="Archery" className="grid-item-image-image" src={archerycrop}/>
                </div>
                <div className="grid-item grid-item-body body-text">
                    Although I only started learning in January 2024, I was obsessed with it. Now, I can shoot with all three major disciplines: Compound, Modern Recurve, and Traditional. With the modern Recuve, I can consistently land arrows within 12 centimeter diameter at 18 metres; with the Compound, 30, and with the Traditional, 12.
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
