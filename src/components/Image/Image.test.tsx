import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';
import { ImageProps } from './Image.types';

describe('Image Component', () => {
  const defaultProps: ImageProps = {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    width: '150',
    height: '150',
    className: 'test-class',
  };

  test('renders Image component with correct attributes', () => {
    const { getByAltText } = render(<Image {...defaultProps} />);
    const imageElement = getByAltText(/Placeholder Image/i);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', defaultProps.src);
    expect(imageElement).toHaveAttribute('alt', defaultProps.alt);
    expect(imageElement).toHaveAttribute('width', defaultProps.width);
    expect(imageElement).toHaveAttribute('height', defaultProps.height);
    expect(imageElement).toHaveClass('test-class');
  });
});
