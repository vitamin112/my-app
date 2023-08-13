import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import "./header.scss";
import "react-bootstrap";
import SearchBox from "../searchBox";
import LoginForm from "../login";
import RegisterForm from '../register';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const [data, setData] = useState();

    return (
        <div id="header">
            <header className="container d-flex justify-content-between align-items-center flex-wrap">
                <div className="headerLogo">
                    <Link to={"/"}>
                        <span>S</span>hop
                    </Link>
                </div>
                <div className="header-menu d-flex align-content-center gap-3" id={showMenu ? "active" : " "}>
                    <div className="header-menu-box">
                        <SearchBox />
                    </div>
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
