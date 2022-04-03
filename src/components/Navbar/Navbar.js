import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-fixed">
      <nav>
        <h1>
          <span className="logo">Canon EOS 700D</span> Review
        </h1>
        <ul>
          <li>HOME</li>
          <li>REVIEWS</li>
          <li>DASHBORD</li>
          <li>BLOGS</li>
          <li>ABOUT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
