import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo/Logo';
import { FiSun } from 'react-icons/fi'
import { FaRegMoon } from 'react-icons/fa'


class Navbar extends Component {
  constructor(props) {
    super(props);
      this.state = {
        darkMode: true,
      };
  }

  handleDarkMode = () => {
    this.setState({darkMode: !this.state.darkMode});
    console.log(this.state.darkMode);
    
    // if (this.state.darkMode === true) {
      
    // }
  }

  render() {
    return(
      <>
        <div className="global-navbar">
          <div className="logo-navbar"><Logo /></div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/weather-app">Se connecter</NavLink></li>
            <li><NavLink to="/app-pictures">Contact</NavLink></li>
          </ul>
          <div className="night-mode">
            <FiSun className="navbar-icon" />
            <div className="toggle-container">
              <input type="checkbox" id="switch" name="theme" onClick={this.handleDarkMode}/>
              <label htmlFor="switch">Toggle</label>
            </div>
            <FaRegMoon className="navbar-icon" />
          </div>
        </div>
      </>
    )
  }
}


export default Navbar
