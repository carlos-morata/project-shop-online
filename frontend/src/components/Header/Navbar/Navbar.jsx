import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarList from './NavbarList'

const Navbar = () => {
  return <nav className="navbar">
    <button className="burger-btn">
      <FontAwesomeIcon icon={faBars} />  
    </button>
    <NavbarList />
  </nav>;
};

export default Navbar;
