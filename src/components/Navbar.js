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
    if (this.state.darkMode === true) {
      document.body.className = 'darked';   
    } else {
      document.body.className = 'light';
    }
  }


  render() {

    return(
      <>
        <div className="global-navbar">
          <div className="logo-navbar"><Logo /></div>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#61DAFB"}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/auth" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#61DAFB"}}>Se connecter</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#61DAFB"}}>Contact</NavLink>
            </li>
          </ul>
          <div className="night-mode">
            <FaRegMoon className="navbar-icon dark" />
            <div className="toggle-container">
              <input type="checkbox" id="switch" name="theme" onClick={this.handleDarkMode}/>
              <label htmlFor="switch">Toggle</label>
            </div>
            <FiSun className="navbar-icon sun" />
          </div>
        </div>
      </>
    )
  }
}


export default Navbar
