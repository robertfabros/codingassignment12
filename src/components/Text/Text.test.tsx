import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';
import { TextProps } from './Text.types';

describe('Text Component', () => {
  const defaultProps: TextProps = {
    content: 'Test Content',
    className: 'test-class',
    style: { color: 'red' },
  };

  test('renders Text component with correct content and attributes', () => {
    const { getByText } = render(<Text {...defaultProps} />);
    const textElement = getByText(/Test Content/i);

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('test-class');
    expect(textElement).toHaveStyle('color: red');
  });
});
