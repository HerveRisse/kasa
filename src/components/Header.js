import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../images/logo-light.svg';
import "../styles/Header.css";

const Header = () => {
    const location = useLocation();

    return ( 
        <div className="header">
            <img src={logoLight} alt="logo kasa"/>
            <nav>
                    <Link className={location.pathname === '/' ? 'link-style-header-active' : 'link-style-header'} to="/">Accueil</Link>
                    <Link className={location.pathname === '/about' ? 'link-style-header-active' : 'link-style-header'} to="/about">A Propos</Link>
                    <Link className={location.pathname === '/accommodation' ? 'link-style-header-active' : 'link-style-header'} to="/accommodation">Accommodation</Link>
            </nav>        
        </div>
    );
}
 
export default Header;