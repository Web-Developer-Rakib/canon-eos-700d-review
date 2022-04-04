import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-fixed">
      <nav>
        <h1>
          <span className="logo">Canon EOS 700D</span> Review
        </h1>
        <ul>
          <Link className="link" to="/">
            HOME
          </Link>
          <Link className="link" to="/reviews">
            REVIEWS
          </Link>
          <Link className="link" to="/dashboard">
            DASHBORD
          </Link>
          <Link className="link" to="/blogs">
            BLOGS
          </Link>
          <Link className="link" to="/about">
            ABOUT
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
