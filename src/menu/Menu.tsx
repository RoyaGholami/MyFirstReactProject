import './Menu.css';
import dreamLogo from './../assets/download.jpg'
function Menu() {


    return (
        <header className="header">
            <div className="nav-bar">
                <div className="site-logo">
                    <img src={dreamLogo} alt="Dream" />
                </div>
                <nav>
                    <a href="#">Domains</a>
                    <a href="#">Hosting</a>
                    <a href="#">WordPress</a>
                    <a href="#">Email </a>
                    <a href="#">Marketing Tools </a>
                    <a href="#">Security</a>
                    <a href="#">Transfer to Us </a>
                    <a href="#">Help Center</a>
                    <a href="#">Account</a>
                </nav>
            </div>

        </header>
    );
};

export default Menu;
