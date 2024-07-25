import React from 'react';

const Footer: React.FC = () => (
  <footer>
    <nav id="footernav">
      <ul>
        <li><a href="https://robertfabros.com">Home</a></li>
        <li><a href="/front-end-dev">Front-End Development</a></li>
        <li><a href="/graphic-design">Graphic Design</a></li>
        <li><a href="/contact-me">Contact Me</a></li>
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
