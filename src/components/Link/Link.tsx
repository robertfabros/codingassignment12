import React, { useState } from 'react';
import { LinkProps, LinkState } from './Link.types';

const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  const [state, setState] = useState<LinkState>({ isClicked: false });

  const handleClick = () => {
    setState({ isClicked: !state.isClicked });
  };

  return (
    <a 
      href={href} 
      className={`${className} ${state.isClicked ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Link;
