import React from 'react';
import '../App.css'; // Use the main App.css for styles

const Boxes: React.FC = () => (
  <section id="boxes">
    <a href="front-end-dev.html">
      <div className="box1">
        <div className="polybox1">
          <div className="polygon1">
            <div className="polytext1">FED</div>
          </div>
          <h3>Front-End Development</h3>
          <p>
            I have been coding HTML and CSS for the past 10 years using Adobe Suites, Visual Studio Code, and other coding platforms. 
            I also develop websites using Wordpress via Elementor and WP Bakery and other website builders.
          </p>
        </div>
      </div>
    </a>
    <a href="front-end-dev.html">
      <div className="box2">
        <div className="polybox1">
          <div className="polygon2">
            <div className="polytext2">GD</div>
          </div>
          <h3>Graphic & Web Design</h3>
          <p>
            Exceptional skills in Graphic Designing (Print and Web) - social media graphic materials, email marketing, web and banners, 
            postcards, catalogues, logo creation, illustrating and tracing vector images, visual layout & many more.
          </p>
        </div>
      </div>
    </a>
    <div className="box3">
      <div className="polybox1">
        <div className="polygon3">
          <div className="polytext3">C</div>
        </div>
        <h3>Book an appointment</h3>
        <p>
          To learn more about my services, please contact me via the Contact Me page or email me at <strong><a href="mailto:robert@robertfabros.com">robert@robertfabros.com</a></strong>.
        </p>
        <p className="contact_box"><a href="contact-me.html">Contact Me</a></p>
      </div>
    </div>
  </section>
);

export default Boxes;
