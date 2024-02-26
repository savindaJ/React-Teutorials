import React from 'react'
import './navBar.css'

export default function NavBar() {

  const topic = 'My React Web App!';

  return (
    <div className='nav-bar'>
      <ul className='list'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <h1>{topic}</h1>
    </div>
  )
}
