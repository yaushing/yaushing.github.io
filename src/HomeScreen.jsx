import logo from './logo.svg';
import './assets/css/style.css';

function HomeScreen() {
    return (
        <div className="main-content">
            <div className="navbar-container">
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>                        
                            </button>
                            <a class="navbar-brand-image" href="/">
                                    <img alt = "Logo" src = {logo} class = "navbar-brand-image" />
                            </a>
                            <a class="navbar-brand " href="/">
                            WebSiteName
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active"><a href="#body">Home</a></li>
                            <li><a href="#body">Page 2</a></li>
                            <li><a href="#body">Page 3</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="big-cover">
                
            </div>
        </div>
    );
}

export default HomeScreen;
