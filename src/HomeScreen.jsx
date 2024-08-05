import logo from './logo.svg';
import splash from './assets/images/home/hello-splash.gif';
import archery from './assets/images/home/archery.jpg';
import archerycrop from './assets/images/home/archery-crop.jpg';
import modernrecurve from './assets/images/home/modernrecurve.jpeg';
import compound from './assets/images/home/compound.jpg'
import trad from './assets/images/home/traditional.jpg';
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
                    Although I only started learning in January 2024, I was obsessed with it. Now, I can shoot with all three major disciplines: Compound, Modern Recurve, and Traditional. With the <hoverbtn><div className="hoverbtn-image-container"><img  className="hoverbtn-image" alt="Reference of a modern recurve" src={modernrecurve} /></div>Modern Recurve</hoverbtn>, I can consistently land arrows within a circle with a 12cm (4.7in) diameter at 18m (59 ft); with the <hoverbtn><div className="hoverbtn-image-container"><img  className="hoverbtn-image" alt="Reference of a modern recurve" src={compound} /></div>Compound</hoverbtn>, 30m (99ft), <br />and with the <hoverbtn><div className="hoverbtn-image-container"><img  className="hoverbtn-image" alt="Reference of a modern recurve" src={trad} /></div>Traditional</hoverbtn>, 12m (40ft).
                </div>
            </div>
            <div className = "spacer">
            <br />
            <hr />
            <br />
            </div>
            <div id="coder" className="grid-container grid-right">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>I'm a coder <i class="fa-solid fa-laptop"></i></strong>
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
                    Having been coding for almost a decade, I'm now a full-stack developer and competitive coder, currently working on Pure Pursuit in python for <a href="https://github.com/roboapex/aps">LEGO® SPIKE</a>. Other than that, my projects can be found <a href="/projects">here</a>. I also have a few <a href="/achievements">awards</a> in some informatics olympiads.
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
