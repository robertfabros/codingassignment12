import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';
import { HeroProps } from './Hero.types';

describe('Hero Component', () => {
  const defaultProps: HeroProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    backgroundImage: 'test-image.jpg',
    className: 'test-class',
    backgroundColor: '#ffffff',
  };

  test('renders Hero component with title and subtitle', () => {
    const { getByText } = render(<Hero {...defaultProps} />);
    const titleElement = getByText(/Test Title/i);
    const subtitleElement = getByText(/Test Subtitle/i);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  test('applies background image and color', () => {
    const { container } = render(<Hero {...defaultProps} />);
    const heroElement = container.firstChild as HTMLElement;

    expect(heroElement).toHaveStyle(`background-image: url(${defaultProps.backgroundImage})`);
    expect(heroElement).toHaveStyle(`background-color: ${defaultProps.backgroundColor}`);
  });

  test('renders children content', () => {
    const childrenContent = 'Test Children Content';
    const { getByText } = render(
      <Hero {...defaultProps}>
        <p>{childrenContent}</p>
      </Hero>
    );

    const childrenElement = getByText(childrenContent);
    expect(childrenElement).toBeInTheDocument();
  });
});
