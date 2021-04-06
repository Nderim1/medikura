import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../header.png";
import "../App.css";
const NavBar = () => {
  return (

    <nav className="navbar p-0">
   
      <img src={logo} className="App-logo" alt="logo" />
    
  </nav>

     
  );
};

export default NavBar;
