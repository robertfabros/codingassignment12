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
        <li><a href="/">Home</a></li>
        <li><a href="/front-end-dev">Front-End Development</a></li>
        <li><a href="/front-end-dev">Graphic Design</a></li>
        <li><a href="/contact-me">Contact Me</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
