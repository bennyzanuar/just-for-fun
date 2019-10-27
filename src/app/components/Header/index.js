import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";

const Header = () => {
    return (
        <nav className="navbar is-transparent is-danger is-fixed-top">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <span className="pokeball"/>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/" className="navbar-item">
                    POKEMON
                </Link>
            </div>
        </nav>
    );
}

export default Header;
