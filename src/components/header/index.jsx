import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import SearchBox from "../searchBox";
import LoginForm from "../loginForm";
import RegisterForm from '../registerForm';
import logo from './logo.png'
import "react-bootstrap";
import "./header.scss";

const Header = ({ darkMode, setDarkMode }) => {

    const [showMenu, setShowMenu] = useState(false);

    const [data, setData] = useState();

    const path = useLocation();
    console.log(path);
    let changeColor = (path, value1, value2) => {
        document.documentElement.style
            .setProperty(path, `${darkMode ? value1 : value2}`);
    }

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
        changeColor('--text-color', "black", 'white');
        changeColor('--background-color', 'white', "rgb(24,25,26)");
        changeColor('--bg-box', 'white', "#777");
    }

    return (
        <div id="header">
            <header className="container d-flex justify-content-between align-items-center flex-wrap">
                <div className="headerLogo">
                    <Link to={"/"}>
                        <div className="d-flex align-content-center">
                            <div className="header-logo-img my-auto">
                                <img src={logo} alt="logo" />
                            </div>
                            <span>L</span>ORSIS
                        </div>
                    </Link>
                </div>
                <SearchBox path={path} />
                <div className="header-menu d-flex align-content-center gap-3 order-last" id={showMenu ? "active" : " "}>
                    <ul>
                        <li>
                            <NavLink
                                className={(navData) => (navData.isActive ? 'active' : 'link')}
                                onClick={() => setShowMenu(false)}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(navData) => (navData.isActive ? 'active' : 'link')}
                                onClick={() => setShowMenu(false)}
                                to="/Contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(navData) => (navData.isActive ? 'active' : 'link')}
                                onClick={() => setShowMenu(false)}
                                to="/product"
                            >
                                product
                            </NavLink>
                        </li>
                    </ul>
                    <div className="header-icon">
                        <LoginForm />
                        <RegisterForm />
                    </div>
                </div>
                <button className='darkMode' onClick={() => handleDarkMode()}>
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </button>
                {showMenu &&
                    <button className='close-btn fs-1' onClick={() => setShowMenu(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>}
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(true)} />
            </header>
        </div>
    );
}

export default Header;
