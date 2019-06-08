import React from "react";
import "../styles/index.scss";

const NavBar = () => {
  return (
    <div className="navbar-expand">
      <div className="navbar">
        <ul className="navbar logo">
          <li>How Air</li>
        </ul>
        <ul className="navbar menu">
          <li>ABOUT</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
