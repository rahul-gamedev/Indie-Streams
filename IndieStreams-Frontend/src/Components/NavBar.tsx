import React from "react";
import Logo from "../assets/is-logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="Nav">
      <div className="Logo">
        <img src={Logo}></img>
        <h1>
          Indie<b>Streams</b>
        </h1>
      </div>

      <ul>
        <li>Home</li>
        <li>Movies</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default NavBar;
