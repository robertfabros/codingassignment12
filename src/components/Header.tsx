import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header id="head">
    <div className="logo">
      <a href="/">
        <img className="robertfabros-logo" src="img/robertfabros-logo1.png" alt="logo" />
      </a>
    </div>
    <nav id="top_nav">
      <ul>
      <li><Link to="/" className="nav-link">Home</Link></li>
      <li><Link to="/front-end-dev" className="nav-link">Front-End Development</Link></li>
      <li><Link to="/graphic-design" className="nav-link">Graphic Design</Link></li>
      <li><Link to="/contact-me" className="nav-link">Contact Me</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
