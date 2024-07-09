
import React from 'react';
import { MyButtonProps } from './MyButton.types';

const MyButton: React.FC<MyButtonProps> = ({ label, disabled, style }) => {
  return (
    <button disabled={disabled} style={style}>
      {label}
    </button>
  );
};

export function sum(a: number, b: number) {
  return a + b;
 }

export default MyButton;