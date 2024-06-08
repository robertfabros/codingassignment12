// src/components/Hero/Hero.tsx

import React from 'react';
import { HeroProps } from './Hero.types';

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, className, backgroundColor, children }) => {
  const combinedStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: backgroundColor, // Directly apply backgroundColor here
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div className={className} style={combinedStyle}>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      {children}
    </div>
  );
};

export default Hero;
