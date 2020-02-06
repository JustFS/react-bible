import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'


class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      sidebar: false
    }
  }

  sidebarAppear = () => {
    this.setState({sidebar: !this.state.sidebar});
  }


  render(){

    return (
      <div className="global-sidebar" style={ this.state.sidebar === true ? {transform: 'translateX(0)'} : {}}>

        <input type="checkbox" name="sidebar" id="sidebar" value="premium" />
        <label htmlFor="sidebar" onClick={this.sidebarAppear.bind(this)}><GiHamburgerMenu id="GiHamburger"/></label>

        <h2>App List</h2>
        <ul>
          <li><NavLink to="/recipe">Recipes</NavLink></li>
          <li><NavLink to="/subscribe">Subscribe</NavLink></li>
          <li><NavLink to="/app-tour">Tour</NavLink></li>
          <li><NavLink to="/budget-calculator">Budget Calculator</NavLink></li>
          <li><NavLink to="/markdown">Markdown</NavLink></li>
          <li><NavLink to="/youtube-like">Youtube</NavLink></li>
          <li><NavLink to="/app-pictures">Pictures</NavLink></li>
        </ul>
      </div>
    );
  };
};

export default Sidebar;