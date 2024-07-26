import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer>
    <nav id="footernav">
      <ul>
      <li><Link to="/" className="nav-link">Home</Link></li>
      <li><Link to="/front-end-dev" className="nav-link">Front-End Development</Link></li>
      <li><Link to="/graphic-design" className="nav-link">Graphic Design</Link></li>
      <li><Link to="/contact-me" className="nav-link">Contact Me</Link></li>
      </ul>
      <p>&copy; Copyright 2024 <a href="https://robertfabros.com">RobertFabros.com</a>. All Rights Reserved.</p>
    </nav>
    <div className="social">
      <a href="https://www.linkedin.com/in/robert-fabros/"><img className="linkedin-icon" src="img/linkedin_icon1.svg" alt="linkedin" /></a>
      <a href="https://www.facebook.com/robertfabros/"><img className="facebook-icon" src="img/facebook_icon1.svg" alt="facebook" /></a>
      <a href="https://twitter.com/jazperson"><img className="twitter-icon" src="img/twitter_icon1.svg" alt="twitter" /></a>
    </div>
  </footer>
);

export default Footer;
