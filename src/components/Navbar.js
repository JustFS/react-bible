import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {

  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert('Searched');
  }

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <div className="navbar">
      <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/horloge">Horloge</NavLink></li>
        <li><NavLink to="/recipe">Recipes</NavLink></li>
        <li><NavLink to="/subscribe">Subscribe</NavLink></li>
        <li><NavLink to="/app-tour">App Tour</NavLink></li>
        <li><NavLink to="/budget-calculator">Budget Calculator</NavLink></li>
        <li><NavLink to="/markdown">Markdown</NavLink></li>
        <li><NavLink to="/youtube-like">Youtube</NavLink></li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img onClick={openSearch} className="searchIcon" src={require('../assets/search.png')} alt="Search" />
        </form>
      </div>
    </div>
  )
}

export default Navbar