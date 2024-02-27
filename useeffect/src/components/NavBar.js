import React from 'react';
import './navbar.css'

const NavBar = (prop) => {
    return (
        <div className='nav-bar'>
            <ul className='list'>
                <li><h2>my counter :<span>{prop.count}</span></h2></li>
                <li><h2>&nbsp; / passed prop :<span>{prop.pass}</span></h2></li>
            </ul>
        </div>
    );
};

export default NavBar;