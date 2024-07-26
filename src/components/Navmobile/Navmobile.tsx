// src/components/Navmobile/Navmobile.tsx
import React from 'react';

const Navmobile: React.FC = () => {
  return (
    <div id="myLinks" style={{ display: 'none' }}>
      <a href="/">Home</a>
      <a href="/front-end-dev">Front-End Development</a>
      <a href="/front-end-dev">Graphic Design</a>
      <a href="/contact-me">Contact Me</a>
    </div>
  );
};

export default Navmobile;
