import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Link from './Link';
import { LinkProps } from './Link.types';
import '../../App.css';

describe('Link Component', () => {
  const defaultProps: LinkProps = {
    href: '/',
    children: 'Home',
    className: 'test-class',
  };

  test('renders Link component with correct attributes', () => {
    const { getByText } = render(<Link {...defaultProps} />);
    const linkElement = getByText(/Home/i);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', defaultProps.href);
    expect(linkElement).toHaveClass('test-class');
  });

  test('changes state on click', () => {
    const { getByText } = render(<Link {...defaultProps} />);
    const linkElement = getByText(/Home/i);

    fireEvent.click(linkElement);
    expect(linkElement).toHaveClass('clicked');
  });
});
