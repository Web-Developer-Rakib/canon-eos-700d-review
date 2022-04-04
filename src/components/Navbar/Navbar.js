import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-fixed">
      <nav>
        <h1>
          <span className="logo">Canon EOS 700D</span> Review
        </h1>
        <ul>
          <NavLink className="link" to="/">
            HOME
          </NavLink>
          <NavLink className="link" to="/reviews">
            REVIEWS
          </NavLink>
          <NavLink className="link" to="/dashboard">
            DASHBOARD
          </NavLink>
          <NavLink className="link" to="/blogs">
            BLOGS
          </NavLink>
          <NavLink className="link" to="/about">
            ABOUT
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
