import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import List from './List';
import { ListProps } from './List.types';

describe('List Component', () => {
  const defaultProps: ListProps = {
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
    className: 'programming-languages',
  };

  test('renders List component with correct items', () => {
    const { getByText } = render(<List {...defaultProps} />);
    defaultProps.items.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  test('applies the correct className', () => {
    const { container } = render(<List {...defaultProps} />);
    expect(container.firstChild).toHaveClass(defaultProps.className);
  });
});
