import React from 'react';

const Hero: React.FC = () => (
  <section id="hero">
    <div className="frame_1">
      <h1 className="text-wrapper">Hello. My name is Robert and I am a</h1>
      <h2 className="front-end-dev">Front-End Dev & Graphic Designer</h2>
      <div className="buttons_main">
        <a href="/front-end-dev" className="myServices">SERVICES</a>
        <a href="/contact-me" className="contact_me">CONTACT ME</a>
      </div>
    </div>
    <div className="frame_2">
      <img src="img/hero-profile.png" alt="Robert Fabros" />
    </div>
  </section>
);

export default Hero;
