import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="links-group">
          <ul className="navbar-list">
            <li>
              <NavLink 
                className="active" 
                aria-current="page"
                to="/"
              >AgroConnect</NavLink>
            </li>

            <li>
              <NavLink 
                className="active" 
                aria-current="page"
                to="/mission"
              >Mission</NavLink>
            </li>

            <li>
              <NavLink
                className="selected-link"
                aria-current="page"
                to="/sell"
              >Become a Farmer</NavLink>
            </li>

            <li>
              <NavLink
                className="selected-link"
                aria-current="page"
                to="/buy"
              >Buy</NavLink>
            </li>
          </ul>
        </div>

        <div className="links-group">
          <ul>
            <li>
              <Link to="/signup">
                <button>SIGNUP</button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button>LOGIN</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  ); // return
}

export default Navbar;
