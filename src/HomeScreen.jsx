import logo from './logo.svg';
import splashBg from './assets/home/images/compound-landscape.jpg';
import splash from './assets/home/images/hello-splash.gif';
import archery from './assets/home/images/archery.jpg';
import archerycrop from './assets/home/images/archery-crop.jpg';
import coding from './assets/home/images/coding.jpeg';
import modernrecurve from './assets/home/images/modernrecurve.jpeg';
import arrowGif from './assets/home/images/arrow.gif';
import compound from './assets/home/images/compound.jpg'
import trad from './assets/home/images/traditional.jpg';
import sfacpdf from './assets/home/pdfs/sfac.pdf'
import './assets/css/style.css';
function HomeScreen() {
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
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/projects">Projects</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="splash">
                <div className="overlay" />
                <img alt = "Splash bg" className="bg" src={splashBg} />
                <img alt = "Big Hello" className="anim" src={splash} />
                <div className="down-arrow-container">
                    <div className="down-arrow">
                        <i className="fa-solid fa-arrow-down" onClick={() => scrollOne()}></i>
                    </div>
                </div>
            </div>
            <div id="archery" className="grid-container grid-left">
                <div className="grid-container-overlay-container">
                    <img alt="Arrow flying across screen" className="grid-container-overlay" src={arrowGif}/>
                </div>
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>I'm an archer <i className="fa-solid fa-bullseye"></i></strong>
                    </p>
                    </div>
                <div className="grid-item grid-item-image">
                    <div className="image-overlay"></div>
                    <div className="grid-item-image-container">
                        <div className="grid-item-image-image-container"> 
                            <img alt="Archery" className="grid-item-image-image-inside-container" src={archery}/>
                        </div>
                        <p className="grid-item-image-caption">
                            Me shooting my mordern recurve <i className="fa-solid fa-arrow-turn-up"></i>
                        </p>
                    </div>
                    <img alt="Archery" className="grid-item-image-image" src={archerycrop}/>
                </div>
                <div className="grid-item grid-item-body body-text">
                    Although I only started learning in January 2024, I was obsessed with it. Now, I can shoot with all three major disciplines: Compound, Modern Recurve, and Traditional. With the <br /><div className="hoverbtn"><div className="hoverbtn-image-container"><img  className="hoverbtn-image" alt="Reference of a modern recurve" src={modernrecurve} /></div>Modern Recurve</div>, I can consistently land arrows within a circle with a 12cm (4.7in) diameter at 18m (59 ft); with the <br /><div className="hoverbtn"><div className="hoverbtn-image-container"><img  className="hoverbtn-image" alt="Reference of a modern recurve" src={compound} /></div>Compound</div>, 30m (99ft), and with the <br /><div className="hoverbtn"><div className="hoverbtn-image-container"><img  className="hoverbtn-image" alt="Reference of a modern recurve" src={trad} /></div>Traditional</div>, 12m (40ft).
                </div>
            </div>
            <div className = "spacer"><br /><hr /><br /></div>
            <div id="coder" className="grid-container grid-right">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>I'm a coder <i className="fa-solid fa-laptop"></i></strong>
                    </p>
                    </div>
                <div className="grid-item grid-item-image">
                    <div className="image-overlay"></div>
                    <div className="grid-item-image-container">
                        <div className="grid-item-image-image-container"> 
                            <img alt="Archery" className="grid-item-image-image-inside-container" src={coding}/>
                        </div>
                        <p className="grid-item-image-caption">
                        <i className="fa-solid fa-arrow-turn-up fa-flip-horizontal"></i> My code for an informatics olympiad question
                        </p>
                    </div>
                    <img alt="Code" className="grid-item-image-image" src={coding}/>
                </div>
                <div className="grid-item grid-item-body body-text">
                    Having been coding for almost a decade, I'm now a full-stack developer and competitive coder, currently working on Pure Pursuit in python for <a href="https://github.com/roboapex/aps">LEGO® SPIKE</a>. Other than that, my projects can be found <a href="/projects">here</a>. I also have a few <a href="/achievements">awards</a> in some informatics olympiads, like the Perse Coding Team Challenge.
                </div>
            </div>
            <div className = "spacer"><br /><hr /><br /></div>
            <div id="redcross" className="grid-container grid-left">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>I'm a first aider <i className="fa-solid fa-suitcase-medical"></i></strong>
                    </p>
                    </div>
                <div className="grid-item grid-item-image">
                    <div className="image-overlay"></div>
                    <div className="grid-item-image-container">
                        <div className="grid-item-image-image-container"> 
                            <img alt="First aid" className="grid-item-image-image-inside-container"/>
                        </div>
                        <p className="grid-item-image-caption">
                            No caption<i className="fa-solid fa-arrow-turn-up"></i>
                        </p>
                    </div>
                    <img alt="Red Cross" className="grid-item-image-image" />
                </div>
                <div className="grid-item grid-item-body body-text">
                    Since 2022, I was interested in getting a first aid certification to help others. In March 2024, I finally got my <a href={sfacpdf} target="_blank" rel="noreferrer">Standard First Aid certification</a> from the Singapore Red Cross, accredited by the Singapore Resuscitation and First Aid Council. Now, every other Saturday, with other members of the Singapore Red Cross, I either cycle around Jurong Lake Gardens providing first aid to the injured as part of <a href = "https://redcross.sg/first-aiders-on-wheels.html" target = "_blank" rel="noreferrer">First Aiders on Wheels</a>, or help bandage blood donors at West Gate Bloodbank, improving the flow of donors while ensuring their comfort.
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
