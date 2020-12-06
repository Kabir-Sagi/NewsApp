/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import React from "react";
import {Link} from 'react-router-dom'

function template() {
  return (
    <div className="navbar1">
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <Link to="#" className="navbar-brand">NewsApp</Link>
      
      <button className="navbar-toggler" data-toggle="collapse" data-target="#snb">
        <span className="navbar-toggler-icon"></span>
        </button>
      <div className=" collapse navbar-collapse" id="snb">
        <ul className="navbar-nav px-5  ">
        <li classname="navbar-item"><Link to="/topheadlines" className="nav-link">Trending News</Link></li>
          <li className="nav-item px-2 dropdown">
            <Link to="/"  className="nav-link dropdown-toggle" data-toggle="dropdown">Categories</Link>
          
          <div class="dropdown-menu" id="s1" >
          <Link class="dropdown-item" to="/business">Business</Link>
          <Link class="dropdown-item" to="/entertainment">Entertainment</Link>
          <Link class="dropdown-item" to="/sports">Sports</Link>
          <Link class="dropdown-item" to="/technology">Technology</Link>
          <Link class="dropdown-item" to="/health">Health</Link>
          </div>
          
          </li>

         
         
  
         
         
      
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default template;
