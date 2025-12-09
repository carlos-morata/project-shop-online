import React from "react";
import SocialLinks from './SocialLinks'
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return <ul>
      <li>
        <Link to='/legalidad'>Políticas Legales</Link>
      </li>
      <li>
        <Link to='/creditos'>Derechos de Autor</Link>
      </li>
  </ul>;
};

export default FooterLinks;
