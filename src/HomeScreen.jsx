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
import CarouselInstance from './CarouselLogic';
import './assets/css/style.css';
function HomeScreen() {
    const vw = document.documentElement.clientHeight;
    const sections = 3;

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
            <CarouselInstance
                            items={[
                                <div id="archery" className="grid-container grid-left">
                                    <div className="grid-item grid-item-title">
                                        <p>
                                            <strong>Archery <i className="fa-solid fa-bullseye"></i></strong>
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
                                        From young, I was interested in archery, from the "cool archers" on TV. After starting a few years ago and all three major disciplines (see left and right pages for details), I quickly fell in love with it, but primarily for the physics behind how the bow works, from conundrums such as the archer's paradox to the complicated kinematics of gears and pulleys of a compound bow. 
                                    </div>
                                </div>,
                                <div id="archery" className="grid-container grid-left">
                                    <div className="grid-item grid-item-title">
                                        <p>
                                            <strong>The Traditional Bow</strong>
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
                                        This is the oldest, most simple bow, often called by others as simply 'a stick with a a string across it'. This bow is the source of the age-old “Archer's Paradox”: Arrows are mounted at an angle off to the side, instead of directly forwards - yet, arrows travel forward instead of off to the side. Why? The  answer is that due to the difference in weight of the tip and the shaft, arrows bend when shot, and its rotation will cause it to stabilise in flight, much like a gyroscope. A more in-depth explanation can be found <a href="https://en.wikipedia.org/wiki/Archer%27s_paradox" target="_blank" rel="norefferer">here</a>.
                                    </div>
                                </div>,
                                <div id="archery" className="grid-container grid-left">
                                    <div className="grid-item grid-item-title">
                                        <p>
                                            <strong>The Modern Recurve</strong>
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
                                        The most popular bow now in modern days, this is the bow used in Olympic archery and the majority of mainstream archery competitions. It has numerous upgrades from a traditional bow. Arrows can be mounted forward straight through the bow, stopping the “Archer's Paradox”. A stabiliser is added to reduce recoil and move the center of gravity nearer to the hand, a red dot sight for easier target acquisition, and other gizmos to perfect consistency and accuracy — a blend of the physics of a traditional bow and modern mechanics.
                                    </div>
                                </div>,
                                <div id="archery" className="grid-container grid-left">
                                    <div className="grid-item grid-item-title">
                                        <p>
                                            <strong>The Modern Recurve</strong>
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
                                        If the Modern Recurve and high-tech physics had a baby, it would be the Compound bow, whose mechanics and physics could be an entire doctorate's research paper on kinematics. Adorned with pulleys, gears, and a plethora of other gizmos, this bow is the most advanced kind of bow in the world. After pulling the the string back, the force drawn will decrease, and after a certain point, the force will spike up to the point where the archer can't pull past it. Often equiped with a magnification scope, glow sights, stabilisers and <strong>even a rangefinder</strong>, the accuracy one can get with this bow is astounding. However, due to the way the bow works, the tension on the string does not act at all to counteract gravity, so the bow will feel much, much heavier compared to other bows when at a full draw.
                                    </div>
                                </div>
                            ]}
                            autoplay={false}
                        />
            <div className = "spacer"><br /><hr /><br /></div>
            <div id="coder" className="grid-container grid-right">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>Coding <i className="fa-solid fa-laptop"></i></strong>
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