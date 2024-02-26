import React from 'react';
import './nav-bar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <ul className='list'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/vehicle"><li>Vehicle</li></Link>
            </ul>
        </div>
    );
};

export default NavBar;