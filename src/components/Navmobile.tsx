import React from 'react';
import '../App.css';

const Navmobile: React.FC = () => {
  const myFunction = () => {
    const links = document.getElementById("myLinks");
    if (links) {
      links.style.display = links.style.display === "block" ? "none" : "block";
    }
  };

  return (
    <>
      {/* Top Navigation Menu */}
      <div className="topnav">
        <div id="myLinks">
          <a href="/">Home</a>
          <a href="front-end-dev.html">Front-End Development</a>
          <a href="front-end-dev.html">Graphic Design</a>
          <a href="contact-me.html">Contact Me</a>
        </div>
        <button className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </>
  );
};

export default Navmobile;
