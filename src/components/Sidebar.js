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
          <li>
            <NavLink to="/recipe" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#8F1F00"}}>Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/subscribe" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#8F1F00"}}>Subscribe</NavLink>
          </li>
          <li>
            <NavLink to="/app-tour" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#8F1F00"}}>Tour</NavLink>
          </li>
          <li>
            <NavLink to="/budget-calculator" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#8F1F00"}}>Budget Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/markdown" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#8F1F00"}}>Markdown</NavLink>
          </li>
          <li>
            <NavLink to="/youtube-like" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#8F1F00"}}>Youtube</NavLink>
          </li>
          <li>
            <NavLink to="/app-pictures" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#8F1F00"}}>Pictures</NavLink>
          </li>
          <li>
            <NavLink to="/morpion" activeClassName="nav-active" activeStyle={{fontWeight: "bold", color: "#8F1F00"}}>Morpion</NavLink>
          </li>
        </ul>
      </div>
    );
  };
};

export default Sidebar;