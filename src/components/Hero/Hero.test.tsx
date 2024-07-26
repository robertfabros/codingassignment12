import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders Hero component with title and subtitle', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const titleElement = getByText(/Hello. My name is Robert and I am a/i);
    const subtitleElement = getByText(/Front-End Dev & Graphic Designer/i);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders children content', () => {
    const childrenContent = 'Test Children Content';
    const { getByText } = render(
      <MemoryRouter>
        <Hero>
          <p>{childrenContent}</p>
        </Hero>
      </MemoryRouter>
    );

    const childrenElement = getByText(childrenContent);
    expect(childrenElement).toBeInTheDocument();
  });
});
