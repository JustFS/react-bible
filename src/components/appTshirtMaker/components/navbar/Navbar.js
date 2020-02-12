import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand text-white">Tshirt-Meme-Design</a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar"></button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link text-white">Sign up</a>
              </li>              
              <li className="nav-item">
                <a href="/" className="nav-link text-white">Log in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;