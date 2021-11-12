import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
            <Link to='/' className="left brand-logo">ShoeMatcher</Link>
            <ul id="nav-mobile" className="right">
               <Link to="/shoe">Shoes</Link>
            </ul>
            </div>
        </nav>
    );
};

export default Header;