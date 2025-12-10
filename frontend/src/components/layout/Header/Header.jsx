import React from "react";
import { Link } from "react-router-dom";
// Importaciones Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav'
import SearchProducts from '../../forms/SearchProducts'
import ShoppingCart from './ShoppingCart'
import logo from '../../../assets/images/logoTienda.png'

const Header = () => {
  return <header className="header-container">
    <Nav />
    <Link to='/' className="logo">
      <img src={logo} alt="Logotipo" />
    </Link>
    <FontAwesomeIcon icon={faUser} />
    <SearchProducts />
    <ShoppingCart />
  </header>;
};

export default Header;
