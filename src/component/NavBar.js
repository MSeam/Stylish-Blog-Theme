import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faSearchengin,
} from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  return (
    <div className="Apps container">
      <header className="navbar">
        {/* Left Side: Logo */}
        <div className="logo">
          <img
            src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2017/07/logo-2-2x.png"
            alt=""
            width="200px"
          />
        </div>

        {/* Center: Navigation Links */}
        <nav className="nav-links">
          <a href="#">
            Home
          </a>
          <a href="#">
            Features
          </a>
          <a href="#">
            Shop
          </a>
          <a href="#">
            Lifestyle 
          </a>
          <a href="#">
            Fashion 
          </a>
          <a href="#">Buy Theme</a>
        </nav>

        <div className="social-icons">
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faSearchengin} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
