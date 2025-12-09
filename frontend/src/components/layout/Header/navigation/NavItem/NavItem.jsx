import React from "react";
import { Link } from 'react-router-dom';

const NavItem = () => {
  return <div>
    <Link to='/mujer'>Mujer</Link>
    <Link to='/hombre'>Hombre</Link>
  </div>;
};

export default NavItem;
