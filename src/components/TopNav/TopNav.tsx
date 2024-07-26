// src/components/TopNav/TopNav.tsx
import React from 'react';
import Navmobile from '../Navmobile/Navmobile';

const TopNav: React.FC = () => {
  const myFunction = () => {
    const links = document.getElementById("myLinks");
    if (links) {
      links.style.display = links.style.display === "block" ? "none" : "block";
    }
  };

  return (
    <div className="topnav">
      <Navmobile />
      <button className="icon" aria-label="menu-button" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
};

export default TopNav;
