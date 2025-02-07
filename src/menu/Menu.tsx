import './Menu.css';
import dreamLogo from './../assets/download.jpg'
import { NavLink } from 'react-router-dom';
function Menu() {


    return (
        <header className="header">
            <div className="nav-bar">
                <div className="site-logo">
                    <img src={dreamLogo} alt="Dream" />
                </div>
                <nav>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                    <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink>
                    <NavLink to="/hosting" className={({ isActive }) => (isActive ? 'active' : '')}>Hosting</NavLink>
                    <NavLink to="/wordpress" className={({ isActive }) => (isActive ? 'active' : '')}>WordPress</NavLink>
                    {/* <NavLink to="#">Email </NavLink>
                    <NavLink to="#">Marketing Tools </NavLink>
                    <NavLink to="#">Security</NavLink>
                    <NavLink to="#">Transfer to Us </NavLink>
                    <NavLink to="#">Help Center</NavLink>
                    <NavLink to="#">Account</NavLink> */}
                </nav>
            </div>

        </header>
    );
};

export default Menu;
