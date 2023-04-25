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
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li>Categories</li>
        <a
          className="upload-btn"
          onClick={() => {
            navigate("/upload");
          }}
        >
          Upload
        </a>
        <BsPersonCircle
          onClick={() => {
            navigate("/profile");
          }}
          className="icons"
        />
      </ul>
    </div>
  );
};

export default NavBar;
