// src/components/Navmobile/Navmobile.test.tsx
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navmobile from './Navmobile';

describe('Navmobile Component', () => {
  test('renders Navmobile component with links', () => {
    render(<Navmobile />);
    const homeLink = screen.getByText('Home');
    const frontEndLink = screen.getByText('Front-End Development');
    const graphicDesignLink = screen.getByText('Graphic Design');
    const contactLink = screen.getByText('Contact Me');

    expect(homeLink).toBeInTheDocument();
    expect(frontEndLink).toBeInTheDocument();
    expect(graphicDesignLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('hovering over links', async () => {
    render(<Navmobile />);
    const homeLink = screen.getByText('Home');
    await userEvent.hover(homeLink);
    // Add additional assertions if needed
  });
});
