import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from './SocialLinks'


const Footer = () => {
  return <footer className="footer-container">
    <div className="links-container">
    <Link to='/contacto'>Contacto</Link>
    <Link to='/legalidad'>Políticas Legales</Link>
    <Link to='/creditos'>Derechos de Autor</Link>
    <SocialLinks />
    </div>
  </footer>;
};

export default Footer;
