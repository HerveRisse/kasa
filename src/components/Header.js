import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="header">
            <img alt="logo kasa"/>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/accommodation">Accommodation</Link>
                </ul>
            </nav>        
        </div>
    );
}
 
export default Header;