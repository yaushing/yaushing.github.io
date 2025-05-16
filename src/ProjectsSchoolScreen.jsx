import logo from './logo.svg';
import splash from './assets/projects/images/projects-splash.gif';
import './assets/css/style.css';
import Carousel from './prefabs/Carousel';
import Footer from './prefabs/Footer'

import sendingChatbot from './assets/projects/images/coursework/chatbotSend.png';
import receivingChatbot from './assets/projects/images/coursework/chatbotReply.png';
import moodChart from './assets/projects/images/coursework/moodChart.png';
import exercises from './assets/projects/images/coursework/breathing.png';
import courseworkDemo from './assets/projects/images/coursework/demo.gif';

function ProjectsSchoolScreen() {
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
                                <img alt="Logo" src={logo} className="navbar-brand-image" />
                            </a>
                            <a className="navbar-brand" href="/">
                                Kam Yau Shing
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#/about">About Me</a></li>
                                <li className="active"><a href="#/projects">Projects</a></li>
                                <li><a href="#/achievements">Achievements</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="splash">
                <div className="overlay" />
                <img alt="Splash Background" className="bg" />
                <img alt="My Projects Animation" className="anim" src={splash} />
                <div className="down-arrow-container">
                    <div className="down-arrow">
                        <i className="fa-solid fa-arrow-down" onClick={() => scrollOne()}></i>
                    </div>
                </div>
            </div>
            <Carousel
                items={[
                    <div id="coursework" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Computer Science: Computing+ S3 - S4 Coursework</strong>
                            </p>
                        </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img style={{objectPosition: "10% 0%"}} alt="Project Screenshot" className="grid-item-image-image-inside-container" src={sendingChatbot} />
                                </div>
                                <p className="grid-item-image-caption">
                                    A glimpse into the coursework <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Background" className="grid-item-image-image" />
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            During S3 and S4, my team, consisting of myself, Vimal, and Jolene, embarked on an ambitious project to design a gamified mental health platform tailored for students. With the rising prevalence of mental health challenges among young individuals, we sought to create an engaging and approachable solution. Our research revealed that many existing mental health apps often deter users with their clinical interfaces. We aimed to bridge this gap by offering a platform that was not only functional but also inviting, addressing the hesitation many students feel when seeking help.
                        </div>
                    </div>,
                    <div id="coursework" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Computing+ S3 - S4 Coursework: Chatbot</strong>
                            </p>
                        </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img style={{objectPosition: "10% 0%"}} alt="Chatbot Screenshot" className="grid-item-image-image-inside-container" src={receivingChatbot} />
                                </div>
                                <p className="grid-item-image-caption">
                                    Chatbot in action <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Background" className="grid-item-image-image" />
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            A standout feature of our project was the AI-powered therapist chatbot. Leveraging OpenAI's API, we developed a conversational agent designed to provide empathetic and supportive interactions. The chatbot was meticulously crafted to ensure a warm and approachable demeanor, utilizing system prompts to enhance user experience. To further elevate its capabilities, we implemented a persistent memory system, enabling the chatbot to retain user interactions even after sessions ended. By employing innovative summarization techniques, we optimized memory storage, allowing for efficient and cost-effective operation.
                        </div>
                    </div>,
                    <div id="coursework" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Computing+ S3 - S4 Coursework: Mood Chart</strong>
                            </p>
                        </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Mood Chart Screenshot" className="grid-item-image-image-inside-container" src={moodChart} />
                                </div>
                                <p className="grid-item-image-caption">
                                    Visualizing emotional patterns <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Background" className="grid-item-image-image" />
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            Another innovative addition was the Mood Chart. By analyzing user inputs with Python's Valence Aware Dictionary and sEntiment Reasoner, we gauged the emotional tone of messages. This data was aggregated daily and stored locally, allowing users to track their emotional trends over time. The Mood Chart provided a powerful tool for self-reflection, empowering users to identify patterns and better understand their emotional well-being.
                        </div>
                    </div>,
                    <div id="coursework" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Computing+ S3 - S4 Coursework: Guided Exercises</strong>
                            </p>
                        </div>
                        <div className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="grid-item-image-image-container"> 
                                    <img alt="Guided Exercises Screenshot" className="grid-item-image-image-inside-container" src={exercises} />
                                </div>
                                <p className="grid-item-image-caption">
                                    Grounding through guided exercises <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Background" className="grid-item-image-image" />
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            The final key feature was the inclusion of guided breathing and body scan exercises. Recognizing that many students struggle with grounding techniques, we integrated these exercises into the platform to provide a calming and structured approach to mindfulness. These tools were designed to help users stay present and centered, offering a much-needed respite from the stresses of daily life.
                        </div>
                    </div>,
                    <div id="coursework" className="grid-container grid-left">
                        <div className="grid-item grid-item-title">
                            <p>
                                <strong>Computing+ S3 - S4 Coursework: Repository</strong>
                            </p>
                        </div>
                        <div style={{display:"flex", justifyContent: "center", alignItems: "center"}} className="grid-item grid-item-image">
                            <div className="image-overlay"></div>
                            <div className="grid-item-image-container">
                                <div className="courseworkGIFContainer grid-item-image-image-container"> 
                                    <img alt="Demo GIF" className="courseworkGIF grid-item-image-image-inside-container" src={courseworkDemo} />
                                </div>
                                <p className="grid-item-image-caption">
                                    Demo <i className="fa-solid fa-arrow-turn-up"></i>
                                </p>
                            </div>
                            <img alt="Background" className="grid-item-image-image" />
                        </div>
                        <div className="grid-item grid-item-body body-text">
                            You can access the source code, releases, more explanations, and credits in the repository, accessible <a href="https://github.com/yaushing/coursework" target="_blank" rel="noreferrer">here.</a>
                        </div>
                    </div>
                ]}
            />
            <div className = "spacer"><br /><hr /><br /></div>
            <Carousel
                items={[
                    <div id="bioISS" className="grid-container grid-right">
                    <div className="grid-item grid-item-title">
                        <p>
                            <strong>Biology / Research: ISS</strong>
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
                        In 2023, my friend, Rachel, and I conducted a research experiment on the locations of the school that had the most amount of bacteria. Some locations we took into account was the canteen seat, canteen table, floor, student's tables, .etc. Our results? We found out that surfaces like the canteen table and even the desks that students use are actually the dirtiest part of the school, by far. However, for the control group, a desk that was cleaned regularly, close to no bacterial growth was found. Hence, routinely cleaning the desk can really reduce the amount of bacteria found on a surface. Even surfaces cleaned rarely, such as door handles are found to be cleaner than than student's tables.
                    </div>
                </div>,
                <div id="bioISS" className="grid-container grid-right">
                    <div className="grid-item grid-item-title">
                        <p>
                            <strong>Biology / Research: ISS</strong>
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
                        Our website's research log can be found <a href="https://sites.google.com/ssts.edu.sg/2023sstisss2-08-f/">here</a>. Our group's report can be
                    </div>
                </div>
                ]}
            />
            <div className = "spacer"><br /><hr /><br /></div>
            <Carousel
                items={[
                    <div id="blah" className="grid-container grid-left">
                    <div className="grid-item grid-item-title">
                        <p>
                            <strong>Robotics: Bipedal Robot</strong>
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
            <div className = "spacer"><br /><hr /><br /></div>
            <Carousel
                items={[
                    <div id="blah" className="grid-container grid-right">
                    <div className="grid-item grid-item-title">
                        <p>
                            <strong>CyberSecurity : OSCP</strong>
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

export default ProjectsSchoolScreen;
