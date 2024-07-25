import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {

  test('renders Hero component with title and subtitle', () => {
    const { getByText } = render(<Hero />);
    const titleElement = getByText(/Hello. My name is Robert and I am a/i);
    const subtitleElement = getByText(/Front-End Dev & Graphic Designer/i);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders children content', () => {
    const childrenContent = 'Test Children Content';
    const { getByText } = render(
      <Hero>
        <p>{childrenContent}</p>
      </Hero>
    );

    const childrenElement = getByText(childrenContent);
    expect(childrenElement).toBeInTheDocument();
  });
});
