import logo from './logo.svg';
import CarouselInstance from './CarouselLogic';

import splashBg from './assets/home/images/compound-landscape.jpg';
import splash from './assets/home/images/hello-splash.gif';

import archery from './assets/home/images/archery.jpg';
import archerycrop from './assets/home/images/archery-crop.jpg';

import coding from './assets/home/images/codingMain.jpeg';
import codingPri from './assets/home/images/codingPrimary.png';
import codingExt1 from './assets/home/images/codingPrimaryExternal.png';
import codingSec from './assets/home/images/codingSecondary.png';
import codingExt2 from './assets/home/images/codingSecondaryExternal.png';
import bd1 from './assets/home/images/bd1.webp';

import art2d from './assets/home/images/2dart.png';
import art3d from './assets/home/images/3dart.jpeg';
import artPhys from './assets/home/images/4dart.jpg';

import sfacpdf from './assets/home/pdfs/sfac.pdf'
import './assets/css/style.css';
function HobbiesScreen() {
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
                            <li className="active"><a href="#/home">Home</a></li>
                            <li><a href="#/projects">Projects</a></li>
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
                            This is the oldest, most simple bow, often called by others as simply 'a stick with a a string across it'. This bow is the source of the age-old “Archer's Paradox”: Arrows are mounted at an angle off to the side, instead of directly forwards - yet, arrows travel forward instead of off to the side. Why? The  answer is that due to the difference in weight of the tip and the shaft, arrows bend when shot, and its rotation will cause it to stabilise in flight, much like a gyroscope. A more in-depth explanation can be found <a href="https://en.wikipedia.org/wiki/Archer%27s_paradox" target="_blank" rel="noreferrer">here</a>.
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
            />
            <div className = "spacer"><br /><hr /><br /></div>
            <CarouselInstance
                items={[
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
                            When people ask me when I started learning to code, I always have to take time to think back. Probably because the first coding course I've ever done was a summer camp introduction to Coding way back in the summer of 2015, at a summer programme at Camp Asia when I was 5. Which means, now, I've been coding for over a decade. In primary school, I joined the coding club, learning micro:bit, minecraft education coding, and basic mbot. I also learned HTML, CSS and JavaScript for my first DSA application. In secondary school, I joined Robotics@Apex as well as its Informatics society, and through it, learnt Python, C++, React.js, SwiftUI, langchain and more. In the next pages are some of the key experiences in my journey for coding.
                        </div>
                    </div>,
                    <div id="coder" className="grid-container grid-right">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Primary School <i className="fa-solid fa-laptop"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Scratch" className="grid-item-image-image-inside-container" src={codingPri}/>
                                </div>
                                <p className="grid-item-image-caption">
                                <i className="fa-solid fa-arrow-turn-up fa-flip-horizontal"></i> Flappy Bird made in Scratch that I made in P6
                                </p>
                            </div>
                            <img alt="Scratch" className="grid-item-image-image" src={codingPri}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            This was the first period I started coding in. From the summer camp at Camp Asia, I continued my learning, more and more, until I <em>entered</em> Primary School. There I joined the Info-Comm club, where I learnt coding the BBC Micro:Bit, as well as Minecraft Education Edition. I also learnt how to code the MakeBlock mBot, a small robot which was my first experience in robotics. Furthermore, we explored MIT's AppInventor, and made some apps using it. In P5, I made a <a href="https://replit.com/@JamieYS/Global-warming">website</a> using HTML, CSS and JavaScript for a school project on Climate Change, available on repl.it.
                        </div>
                    </div>,
                    <div id="coder" className="grid-container grid-right">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>External <i className="fa-solid fa-laptop"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Website screenshot" className="grid-item-image-image-inside-container" src={codingExt1}/>
                                </div>
                                <p className="grid-item-image-caption">
                                <i className="fa-solid fa-arrow-turn-up fa-flip-horizontal"></i> The website on Climate Change I made in P5
                                </p>
                            </div>
                            <img alt="Website screenshot" className="grid-item-image-image" src={codingExt1}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            Primary School was marked by days ending by 1 pm, resulting in <strong>a lot</strong> of free time. I spent a lot of it learning how to code in other manners, such as Python, HTML, CSS, and JavaScript. Using vanilla HTML, CSS and JS, I created my first dsa website hosted <a href="https://yaushing.github.io/dsa" target="_blank" rel="noreferrer">here</a>. As for Python, I went to classes from organisations such as the now-closed First Code Academy, as well as holiday courses from SG Code Campus (which also unfortunately changed the way it runs). Following that, I got my own makeBlock mBot and EV3, and coded those at home in my free time. Furthermore, during the circuit breaker, in my free time, I collaborated with Junior Achievement (JA) and Code.org to help teach the Hour of Code to primary school students remotely, where we taught basic block-based coding.
                        </div>
                    </div>,
                    <div id="coder" className="grid-container grid-right">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Secondary School <i className="fa-solid fa-laptop"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Code" className="grid-item-image-image-inside-container" src={codingSec}/>
                                </div>
                                <p className="grid-item-image-caption">
                                <i className="fa-solid fa-arrow-turn-up fa-flip-horizontal"></i> My group's coursework product - a gamified therapist powered by AI.
                                </p>
                            </div>
                            <img alt="Code" className="grid-item-image-image" src={codingSec}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            Secondary School was not a place I had free time in. But it was still a place that I learnt a lot. In S1, I joined SST Inc., where I was taught how to use React.js, SwiftUI, and a bit of Android Studio. I also learnt some C++ for coding in Arduino, using the SSTuino taught to us. Using this, in S2, I made an iPhone app that tracks all the different sports taught at different ActiveSG centers across Singapore, as well as the basics of what each sport was. At the end of the same year, I made an android app that pairs with an arduino that will alert you whenever the noise level in a certain room is too high. By then, I had joined Robotics@Apex, and I spent the first 2 years learning robotics coding using blocks for SPIKE™ Prime, and C++ for VᴱX. In S3, I made a <a href="https://github.com/yaushing/aps" target="_blank" rel="noreferrer">Pure Pursuit controller for a SPIKE™ robot</a>. I also joined the Informatics Society, where I learnt Python and C++ for competitive programming, winning a few Distinctions in some <a href="#/achievements">competitions</a>. In S4, I was introduced to LLMs during a course at Republic Polytechnic, where I learnt LangChain, LangGraph, using ChatGPT's API and more. In Robotics@Apex, I created a <a href="https://github.com/yaushing/py3-qmc5883l" target="_blank" rel="noreferrer">library</a> to use the QMC5883L magnetometer with Python3, updating it for use for my participation in RoboCup Singapore 2025. My best project would be my Computing+ Coursework Project, which details can be found <a href="https://github.com/yaushing/coursework" target="_blank" rel="noreferrer">here</a>.
                        </div>
                    </div>,
                    <div id="coder" className="grid-container grid-right">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>External <i className="fa-solid fa-laptop"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Pigeon Simulator" className="grid-item-image-image-inside-container" src={codingExt2}/>
                                </div>
                                <p className="grid-item-image-caption">
                                <i className="fa-solid fa-arrow-turn-up fa-flip-horizontal"></i> I made a pigeon simulator using Unreal Engine once in S2 when I was bored
                                </p>
                            </div>
                            <img alt="Pigeon Simulator" className="grid-item-image-image" src={codingExt2}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            From 2022, after playing the game Star Wars Jedi: Fallen Order, I fell in love with the the protagonist's companion robot, <div className="hoverbtn"><div className="hoverbtn-image-container"><img  className="hoverbtn-image" alt="Reference of BD-1" src={bd1} /></div>BD-1</div> - a cute, useful bipedal robot. Hence, I was inspired to build one myself. Yet, since 2023, it's been on an extended hiatus for the simple reason of me not knowing how I was going to go about it. Yet, now, after my experiences in Robotics@Apex and exploring other microcontrollers, and found an <a href="https://github.com/makerforgetech/modular-biped" target="_blank" rel="noreferrer">open-source project</a>, I've restarting that project, using a new Raspberry Pi 5 that I bought. Also, in 2024, I started learning the Unity Game Engine, as well as Unreal Engine. From there, I learnt about game development, as well as the Unity Engine's version of C#.
                        </div>
                    </div>
                ]}
            />
            <div className = "spacer"><br /><hr /><br /></div>
            <CarouselInstance
                items={[
                    <div id="artist" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>2D Art <i className="fa-solid fa-laptop"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="2d artwork" className="grid-item-image-image-inside-container" src={art2d}/>
                                </div>
                                <p className="grid-item-image-caption">
                                Portrait of Nishinoya Yū from Haikyuu I made for a friend <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="2D artwork" className="grid-item-image-image" src={art2d}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            Though I am by no means a professional artist, I still know basic anatomy and design, and have used that on 2D art to create some of my own. I mostly draw using Procreate on my iPad, and here's a taster -{'>'} <br/> I can't claim to be as good as my sister, who can draw seemingly photorealistic buildings with just a pen and paper, and I also can't not use a digital software. Still, I'm motivated to keep my skills in it. Yet, I'm more and more unwilling to spend time on 2D art, to focus on the art on the next page...
                        </div>
                    </div>,
                    <div id="artist" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>3D Art <i className="fa-solid fa-laptop"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="3D model" className="grid-item-image-image-inside-container" src={art3d}/>
                                </div>
                                <p className="grid-item-image-caption">
                                    3D model of Kaedehara Kazuha, a Genshin Impact character that I was editing for my friend <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="3D model" className="grid-item-image-image" src={art3d}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            I've been making 3D art for a while now, and I love it. I use Blender to create my models, and I love the process of creating them. From kitbashing together a cyberpunk world to painstakingly crafting a landscape, I also use softwares like Daz3D for quickly making humans, Rokoko for re-targeting animations and Mixamo for prebuilt animations. Then, I craft my own textures and materials using either paint.net on my PC or using my iPad's Procreate. For example, the landing page of this website was made using Blender. Though some of the models are taken off various sites from the internet like CGTrader, SketchFab, or Thingiverse, I still made a number of textures for the it, and the rest of the models are procedurally generated. Sometimes, I use blender to make models for my game development, and I plan to use it for my next website in Web3D.
                        </div>
                    </div>,
                    <div id="artist" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Physical obejcts <i className="fa-solid fa-laptop"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Physical model" className="grid-item-image-image-inside-container" src={artPhys}/>
                                </div>
                                <p className="grid-item-image-caption">
                                The model my team of SST and Perse School students made <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Physical model" className="grid-item-image-image" src={artPhys}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            Moving on to a world of art one can touch and feel, I'm familiar with basic CADing. I was taught onShape in Robotics@Apex, and am in charge of the Open platform in it. As such, I teach my juniors how to use Fusion360, as well as BambuStudio. I myself have a BambuLab P1S at home which I use to relise my imaginations. Under a partnership between SST and the Perse School Cambridge, I was also taught how to use Laser Cutters, and used it to create handheld console for the micro:bit in a project to preserve the finger dexterity of the elderly. 
                        </div>
                    </div>
                ]}
            />
            <div className = "spacer"><br /><hr /><br /></div>
            <div id="redcross" className="grid-container grid-right">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>First Aid <i className="fa-solid fa-suitcase-medical"></i></strong>
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
                    Since 2022, I was interested in getting a first aid certification to help others. In March 2024, I finally got my <a href={sfacpdf} target="_blank" rel="noreferrer">Standard First Aid certification</a> from the Singapore Red Cross, accredited by the Singapore Resuscitation and First Aid Council. Now, every other Saturday, with other members of the Singapore Red Cross, I either cycle around Jurong Lake Gardens providing first aid to the injured as part of <a href = "https://redcross.sg/first-aiders-on-wheels.html" target = "_blank" rel="noreferrer">First Aiders on Wheels</a>, or help bandage blood donors at West Gate Bloodbank, improving the flow of donors while ensuring their comfort. Unfortunately, I have not been able to volunteer as much as I would like to, due to my busy schedule. However, I am still a first aider, and I will always be ready to help others in need. Due to security reasons, I cannot show any photos of me inside the blood bank. 
                </div>
            </div>
        </div>
    );
}

export default HobbiesScreen;