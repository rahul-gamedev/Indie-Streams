import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../assets/is-logo.png";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="Nav">
      <div
        className="Logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo}></img>
        <h1>
          Indie<b>Streams</b>
        </h1>
      </div>

      <ul>
        <li>
          <input
            type="text"
            name="text"
            className="input"
            placeholder="Search Contents..."
          ></input>
          <FaSearch className="icons" />
        </li>
        <li>Home</li>
        <li>Categories</li>
        <li
          onClick={() => {
            navigate("/profile");
          }}
        >
          <BsPersonCircle className="icons" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
