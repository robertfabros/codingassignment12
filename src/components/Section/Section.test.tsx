import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Section Component', () => {
  test('renders Section component with correct children and className', () => {
    render(
      <Section className="main-section">
        <div>Content inside section</div>
      </Section>
    );

    const sectionElement = screen.getByText('Content inside section').parentElement;
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass('main-section');
  });
});
