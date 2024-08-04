import logo from './logo.svg';
import splash from './assets/images/home/hello-splash.gif';
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
                <div id="down-arrow-container">
                    <a id="down-arrow" href="#intro">
                        <i className="fa-solid fa-arrow-down"></i>
                    </a>
                </div>
            </div>
            <div id="intro" className="grid-container">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>Hello! I'm Kam Yau Shing.</strong>
                    </p>
                    </div>
                <div className="grid-item grid-item-image">2</div>
                <div className="grid-item grid-item-body">3</div>
            </div>
            <div id="archery" className="grid-container">
                <div className="grid-item grid-item-title">
                    <p>
                        <strong>Hello! I'm Kam Yau Shing.</strong>
                    </p>
                    </div>
                <div className="grid-item grid-item-image">2</div>
                <div className="grid-item grid-item-body">3</div>
            </div>
        </div>
    );
}

export default HomeScreen;
