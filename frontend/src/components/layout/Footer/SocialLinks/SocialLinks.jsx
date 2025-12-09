import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return <ul className="socialLinks-list">
    <li className="socialLinks-item">
      <a href="https://instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </li>
    <li className="socialLinks-item">
      <a href="">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
    </li>
    <li className="socialLinks-item">
      <a href="">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
    </li>
  </ul>
};

export default SocialLinks;
