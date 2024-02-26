import React from 'react';
import './nav-bar.css';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <ul className='list'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default NavBar;