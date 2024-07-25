import React from 'react';
import { MyButtonProps } from './MyButton.types';

const MyButton: React.FC<MyButtonProps> = ({ label, disabled, style, className }) => (
  <button className={className} disabled={disabled} style={style}>
    {label}
  </button>
);

export default MyButton;
