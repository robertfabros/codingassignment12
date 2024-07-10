import React from 'react';
import { render, screen } from '@testing-library/react';
import MyButton from './MyButton';
import '@testing-library/jest-dom';

describe('MyButton Component', () => {
  it('renders with correct label, primary style, and custom background color', () => {
    render(<MyButton label="Primary Button" style={{ backgroundColor: '#1e90ff' }} />);
    const buttonElement = screen.getByText(/Primary Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({ backgroundColor: '#1e90ff' });
    expect(buttonElement).toHaveTextContent('Primary Button');
  });
});
