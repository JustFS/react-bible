import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo/Logo';
import { FiSun } from 'react-icons/fi'
import { MdWbSunny } from 'react-icons/md'


const Navbar = () => {

  return(
    <>
      <div className="global-navbar">
        <Logo />
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/weather-app">Se connecter</NavLink></li>
          <li><NavLink to="/app-pictures">Contact</NavLink></li>
        </ul>
        <div className="night-mode">
          <FiSun className="navbar-icon" />
          <MdWbSunny className="navbar-icon" />
        </div>
      </div>
    </>
  )
}

export default Navbar