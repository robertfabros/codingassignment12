import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';
import { LabelProps } from './Label.types';

describe('Label Component', () => {
  const defaultProps: LabelProps = {
    text: 'Test Label',
    htmlFor: 'test-input',
    className: 'test-class',
  };

  test('renders Label component with correct text and attributes', () => {
    const { getByText } = render(<Label {...defaultProps} />);
    const labelElement = getByText(/Test Label/i);

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', defaultProps.htmlFor); // use 'for' instead of 'htmlFor' for the actual DOM attribute
    expect(labelElement).toHaveClass('test-class');
  });
});
