import logo from './logo.svg';
import Carousel from './prefabs/Carousel.jsx';
import Footer from './prefabs/Footer.jsx';
import Model from './prefabs/ModelViewer.jsx';

import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

import splashVid from './assets/home/videos/archery.webm'
import splash from './assets/home/images/hello-splash.gif';

import archery from './assets/home/images/archery.jpg';
import archerycrop from './assets/home/images/archery-crop.jpg';
import compoundBow from './assets/home/images/compound.jpg';
import traditionalBow from './assets/home/images/traditional.jpg';

import coding from './assets/home/images/codingMain.jpeg';
import codingPri from './assets/home/images/codingPrimary.png';
import codingExt1 from './assets/home/images/codingPrimaryExternal.png';
import codingSec from './assets/home/images/codingSecondary.png';
import codingExt2 from './assets/home/images/codingSecondaryExternal.png';
import cyberSecurity from './assets/home/images/cyberSec.png'
import bd1 from './assets/home/images/bd1.webp';

import tshirtdesign from './assets/home/images/tshirt.png'
import art2d from './assets/home/images/2dart.png';
import art3d from './assets/home/images/3dart.jpeg';
import artPhys from './assets/home/images/physicalEndUse.jpg';

import sfacpdf from './assets/home/pdfs/sfac.pdf'
import './assets/css/style.css';

function HobbiesScreen() {
    const vw = document.documentElement.clientHeight;
    const [show3DKey, switchshow3DKey] = useState(true);
    const [show15AnniSketch, switchshow15AnniSketch] = useState(true);

    const toggleshow3DKey = () => {
        if (show3DKey) {
            switchshow3DKey(false);
        } else {
            switchshow3DKey(true);
        }
    }

    const toggleshow15AnniSketch = () => {
        if (show15AnniSketch) {
            switchshow15AnniSketch(false);
        } else {
            switchshow15AnniSketch(true);
        }
    }

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
                            <li className='active'><a href="#/about">About Me</a></li>
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
                <video autoPlay muted loop className="bg">
                    <source src={splashVid} type="video/webm"/>
                </video>
                <img alt = "Big Hello" className="anim" src={splash} />
                <div className="down-arrow-container">
                    <div className="down-arrow">
                        <i className="fa-solid fa-arrow-down" onClick={() => scrollOne()}></i>
                    </div>
                </div>
            </div>
            <Carousel
                items={[
                    <div id="archery" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Archery  <i className="fa-solid fa-bullseye"></i></strong>
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
                            From young, I was interested in archery, from the "cool archers" on TV. After starting a few years ago and all three major disciplines (see left and right pages for details), I quickly fell in love with it, but primarily for the <strong>physics</strong> behind how the bow works, from conundrums such as the archer's paradox to the complicated kinematics of gears and pulleys of a compound bow. 
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
                                    <Canvas className="grid-item-image-image-inside-container grid-3d-canvas">
                                        <Model source="assets/3dModels/traditional-transformed.glb"/>
                                    </Canvas>
                                </div>
                                <p className="grid-item-image-caption">
                                    Interactive 3D model of a Traditional Bow <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Archery" className="grid-item-image-image" src={traditionalBow}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            The traditional bow—just a simple stick and string—is the oldest form of archery, yet it reveals a fascinating bit of physics known as the Archer's Paradox. In traditional archery, arrows are mounted slightly off-centre, which should cause them to fly sideways. But they don't, thanks to Newton's First Law and the arrow's flexibility.
                            <br />
                            The arrow's heavy metal tip resists motion more than its lighter wooden shaft. When released, this causes the shaft to bend around the bow, allowing the arrow to correct its off-centre path. As it flies, the arrow oscillates slightly but stabilises. The fletching at the rear also helps, spinning the arrow and adding gyroscopic stability to keep it on course.
                            <br />
                            Surprisingly, this ancient tool works thanks to some clever physics in action.
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
                                    <Canvas className="grid-item-image-image-inside-container grid-3d-canvas">
                                        <Model source="assets/3dModels/modernRecurve-transformed.glb"/>
                                    </Canvas>
                                </div>
                                <p className="grid-item-image-caption">
                                    Interactive 3D model of a Modern Recurve <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Archery" className="grid-item-image-image" src={archerycrop}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            The most popular bow now in modern days, this is the bow used in Olympic archery and the majority of mainstream archery competitions. It has numerous upgrades from a traditional bow. Arrows can be mounted forward straight through the bow, stopping the need for archers to rely on the "Archer's Paradox". A stabiliser is added to reduce recoil and move the center of gravity nearer to the hand, a red dot sight for easier target acquisition, and other gizmos to perfect consistency and accuracy — a blend of the physics of a traditional bow and modern mechanics.
                        </div>
                    </div>,
                    <div id="archery" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>The Compound Bow</strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <Canvas className="grid-item-image-image-inside-container grid-3d-canvas">
                                        <Model source="assets/3dModels/compound-transformed.glb"/>
                                    </Canvas>
                                </div>
                                <p className="grid-item-image-caption">
                                    Interactive 3D model of a compound bow <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Archery" className="grid-item-image-image" src={compoundBow}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            If the modern recurve bow and high-tech physics had a baby, it would be the compound bow — a marvel of engineering whose mechanics could warrant an entire doctoral thesis in kinematics. Outfitted with pulleys, cams, and a host of other intricate components, the compound bow is the most advanced type of bow in existence.
                            <br /><br />
                            When the archer draws the string, the force required initially increases, then sharply drops due to a mechanical advantage called "let-off," making it easier to hold at full draw. However, after a certain point, the draw weight spikes again, preventing the archer from pulling further.
                            <br /><br />
                            Often equipped with a magnified scope, glow-in-the-dark sights, stabilizers, and <strong>even a rangefinder</strong>, this bow offers incredible accuracy. But there's a trade-off: because of its cam system, the bowstring's tension does little to counteract gravity. As a result, at full draw, the bow can feel significantly heavier than other types, putting more strain on the archer's muscles during aim.
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
                            <Canvas className="grid-item-image-image-inside-container grid-3d-canvas">
                                <Model source="assets/3dModels/heart-transformed.glb"/>
                            </Canvas>
                        </div>
                        <p className="grid-item-image-caption">
                            <i className="fa-solid fa-arrow-turn-up fa-flip-horizontal"></i> 3D model of a beating human heart 
                        </p>
                    </div>
                    <img alt="Red Cross" className="grid-item-image-image" />
                </div>
                <div className="grid-item grid-item-body body-text">
                    Since 2022, my passion for Biology has driven me to explore how scientific knowledge can be applied to real-life situations. This led me to pursue a <a href={sfacpdf} target="_blank" rel="noreferrer">Standard First Aid certification</a>, which I earned in March 2024 through the Singapore Red Cross. Volunteering at a Blood Bank since then has allowed me to observe key biological principles in action, such as how positions of a person and staying well-hydrated also boosts cerebral perfusion pressure.
                    <br /><br />
                    For example, after a donor had donated her blood and was waiting to be bandaged, she raised that she felt slightly lightheaded. Of my own volition, guided by my own knowledge of human biology and the circulatory system, I had moved a chair to place her in a supine position, had fetched a cup of room-temperature water for her to drink. In that moment, I had managed to apply what I had learnt from my self-study of biology: The loss of blood resulted in a reduction of blood volume, which reduced venous return to the heart, which lowered stroke volume, mean arterial pressure and hence cerebral perfusion pressure, which was likely what caused her to be lightheaded
                    <br /><br />
                    Drinking water increased the plasma volume in the blood by introducing more fluids, which in turn increases venous return. Furthermore, by moving the donor to a supine position, due to the reduced hydrostatic pressure gradient, the venous return to the heart is also increased. Following the converse of the explanation earlier, this allowed her to no longer feel so lightheaded.
                </div>
            </div>
            <div className = "spacer"><br /><hr /><br /></div>
            <Carousel
                items={[
                    <div id="coder" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Coding <i className="fa-solid fa-laptop"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Code" className="grid-item-image-image-inside-container" src={coding}/>
                                </div>
                                <p className="grid-item-image-caption">
                                My code for an informatics olympiad question <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Code" className="grid-item-image-image" src={coding}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            When people ask me when I started learning to code, I always have to take time to think back. Probably because the first coding course I've ever done was a summer camp introduction to Coding way back in the summer of 2015, at a summer programme at Camp Asia when I was 5. Which means, now, I've been coding for over a decade. In primary school, I joined the coding club, learning micro:bit, minecraft education coding, and basic mbot. I also learned HTML, CSS and JavaScript for my first DSA application. In secondary school, I joined Robotics@Apex as well as its Informatics society, and through it, learnt Python, C++, React.js, SwiftUI, langchain and more. In the next pages are some of the key experiences in my journey for coding.
                        </div>
                    </div>,
                    <div id="coder" className="grid-container grid-left">
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
                                Flappy Bird made in Scratch that I made in P6 <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Code" className="grid-item-image-image" src={coding}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            This was the first period I started coding in. From the summer camp at Camp Asia, I continued my learning, more and more, until I <em>entered</em> Primary School. There I joined the Info-Comm club, where I learnt coding the BBC Micro:Bit, as well as Minecraft Education Edition. I also learnt how to code the MakeBlock mBot, a small robot which was my first experience in robotics. Furthermore, we explored MIT's AppInventor, and made some apps using it. In P5, I made a <a href="https://replit.com/@JamieYS/Global-warming">website</a> using HTML, CSS and JavaScript for a school project on Climate Change, available on repl.it.
                        </div>
                    </div>,
                    <div id="coder" className="grid-container grid-left">
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
                                The website on Climate Change I made in P5 <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Code" className="grid-item-image-image" src={coding}/>
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
                                My group's coursework product - a gamified therapist powered by AI. <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Code" className="grid-item-image-image" src={coding}/>
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
                                I made a pigeon simulator using Unreal Engine once in S2 when I was bored <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Code" className="grid-item-image-image" src={coding}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            From 2022, after playing the game Star Wars Jedi: Fallen Order, I fell in love with the the protagonist's companion robot, <div className="hoverbtn"><div className="hoverbtn-image-container"><img  className="hoverbtn-image" alt="Reference of BD-1" src={bd1} /></div>BD-1</div> - a cute, useful bipedal robot. Hence, I was inspired to build one myself. Yet, since 2023, it's been on an extended hiatus for the simple reason of me not knowing how I was going to go about it. Yet, now, after my experiences in Robotics@Apex and exploring other microcontrollers, and found an <a href="https://github.com/makerforgetech/modular-biped" target="_blank" rel="noreferrer">open-source project</a>, I've restarting that project, using a new Raspberry Pi 5 that I bought. Also, in 2024, I started learning the Unity Game Engine, as well as Unreal Engine. From there, I learnt about game development, as well as the Unity Engine's version of C#.
                        </div>
                    </div>,
                    <div id="coder" className="grid-container grid-right">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>CyberSecurity <i class="fa-solid fa-network-wired"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Shhhhh" className="grid-item-image-image-inside-container" src={cyberSecurity}/>
                                </div>
                                <p className="grid-item-image-caption">
                                The quieter you are, the more you are able to hear...<i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Code" className="grid-item-image-image" src={coding}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            Hacking is a difficult, high-risk, high-return skillset. Who wouldn't want someone who can remotely access and destroy targets without leaving a trace? The white-hat side of it, the CyberSecurity industry, is booming and large - and competitive. Currently, I'm learning RedHatting from TryHackMe and HackTheBox, and I plan to get my Offensive Security Cybersecurity Professional (OSCP) by next year. 
                        </div>
                    </div>
                ]}
            />
            <div className = "spacer"><br /><hr /><br /></div>
            <Carousel
                items={[
                    <div id="artist" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Design and Prototyping <i class="fa-solid fa-pen-ruler"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Physical model" className="grid-item-image-image-inside-container" src={artPhys}/>
                                </div>
                                <p className="grid-item-image-caption">
                                Picture from official SST instagram page <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="3D model" className="grid-item-image-image" src={artPhys}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            When it comes to design and prototyping, SST has taught me tremendous amounts, such as Computer Aided Design, 3D printing, Laser Cutting, and 3D modelling. To that extent, I am capable of prototyping, designing, and overall creating an end-use product for clients based on their specifications, provided it is possible using 3D printed materials. For example, pictured, from SST's official instagram page, is the 15<sup>th</sup> Anniversary starting ceremony. I personally designed and printed the key in Mr Chan Chun Sing's hand, the hexagonal button he is pushing it into, as well as the leg panels on the robot to the side of him. When he inserted the key into the button, the button lit up, as well as lights on the stage, kickstarting the 15<sup>th</sup> year of SST, with that key and button being the key official "start" of the ceremony.
                        </div>
                    </div>,
                    <div id="artist" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>3D Modeling and Prototyping <i class="fa-solid fa-vr-cardboard"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    {
                                    show3DKey?<Canvas className="grid-item-image-image-inside-container grid-3d-canvas"><Model source="assets/3dModels/15anniKey-transformed.glb"/></Canvas>:<img alt="3D model" className="grid-item-image-image-inside-container" src={art3d}/>
                                    }
                                </div>
                                {
                                show3DKey?<p className="grid-item-image-caption">
                                    Interactive 3D model of the key I made for SST's 15<sup>th</sup> Anniversary <i className="fa-solid fa-arrow-turn-up"></i> <br /> <a href="#/about" onClick={(e) => {e.preventDefault();toggleshow3DKey()}}>Toggle between interactive and screenshot</a> 
                                </p>:
                                <p className="grid-item-image-caption">
                                    3D model of the Key I modeled and printed for 15<sup>th</sup> Anniversary. This was a mockup before I made it in CAD. <i className="fa-solid fa-arrow-turn-up"></i> <br /> <a href="#/about" onClick={(e) => {e.preventDefault();toggleshow3DKey()}}>Toggle between interactive and screenshot</a>
                                </p>
                                }
                            </div>
                            <img alt="3D model" className="grid-item-image-image" src={art3d}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            However, I would not have my confidence with navigating a 3D scene if I hadn't gone into SST already familiar with 3D modelling. Though Blender is not Computer Aided Design, I used it when I was younger as it was much, much easier to create large, complex models using it and render it photorealistically. Even now, I use it to make 3D art and renders, both on a micro scale and macro scale. For example, the videos on the landing page of this site were all rendered in Blender. The human was made using Daz3D, Rokoko and Mixamo, and the cyberpunk city using geometry nodes, some of my own models, and some models taken off of the internet. Though some of the models are taken off various sites from the internet like CGTrader, SketchFab, or Thingiverse, I still made a number of textures for the it, and the rest of the models are procedurally generated. Sometimes, I use blender to make models for my game development, and I plan to use it for my next website in Web3D. Other than that, I also use Blender for game development and game modding, as shown in this picture.
                        </div>
                    </div>,
                    <div id="artist" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>2D Design <i className="fa-solid fa-laptop"></i></strong>
                            </p>
                            </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="2d artwork" className="grid-item-image-image-inside-container" src={show15AnniSketch?art2d:tshirtdesign}/>
                                </div>
                                {
                                    show15AnniSketch?<p className="grid-item-image-caption">
                                    My idea sketches for the key, the inner circuits and the façade of the button <i className="fa-solid fa-arrow-turn-up"></i> <br /> <a href="#/about" onClick={(e) => {e.preventDefault();toggleshow15AnniSketch()}}>Toggle between the 15<sup>th</sup> Anniversary sketch and graduation T-shirt design</a> 
                                    </p>:
                                    <p className="grid-item-image-caption">
                                    The design I submitted to the school to contend as the graduation shirt for my batch <i className="fa-solid fa-arrow-turn-up"></i> <br /> <a href="#/about" onClick={(e) => {e.preventDefault();toggleshow15AnniSketch()}}>Toggle between the 15<sup>th</sup> Anniversary sketch and graduation T-shirt design</a> 
                                    </p>
                                }
                            </div>
                            <img alt="3D model" className="grid-item-image-image" src={art2d}/>
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            Even 3D design has its roots in 2D sketches. For me, I often use Procreate on my iPad to sketch designs, before turning them into what I want to see in practice. For example, pictured is the rough design schematics of the key and button for the 15<sup>th</sup> Anniversary celebrations, which includes what the top part of the button with the slot would look like, what the button would look like from the front (if x-rayed through), a mockup of the key, as well as a rough idea of what the inner circuitry would look like to light up the button. The other picture (for computers) is the deisgn that I made for my class as our class submission to be voted on as the cohort graduation shirt. Besides just sketches, when I'm 3D modelling, no scene would look good without textures, which are 2D images which has to be made with a digital software. If I want to make my own, I will use my iPad to make it, be it for a custom model, a game mod, a game character or more.
                        </div>
                    </div>
                ]}
            />
            <Footer/>
        </div>
    );
}
useGLTF.preload('assets/3dModels/traditional-transformed.glb')
useGLTF.preload('assets/3dModels/compound-transformed.glb')
useGLTF.preload('assets/3dModels/modernRecurve-transformed.glb')
useGLTF.preload('assets/3dModels/heart-transformed.glb')
useGLTF.preload('assets/3dModels/15annikKey-transformed.glb')

export default HobbiesScreen;