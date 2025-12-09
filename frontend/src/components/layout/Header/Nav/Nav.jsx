import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavItem from '../navigation/NavItem'


const Navbar = () => {
  return <nav className="navbar">
    <button className="burger-btn">
      <FontAwesomeIcon icon={faBars} />  
    </button>
    <NavItem></NavItem>
  </nav>;
};

export default Navbar;
