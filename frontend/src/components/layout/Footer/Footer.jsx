import React from "react";
import { Link } from "react-router-dom";
import FooterLinks from './FooterLinks'
import SocialLinks from '../Footer/FooterLinks/SocialLinks'


const Footer = () => {
  return <footer className="footer-container">
    <Link to='/contacto'>Contacto</Link>
    <FooterLinks />
    <SocialLinks />
  </footer>;
};

export default Footer;
