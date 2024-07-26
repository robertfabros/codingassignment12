import React from 'react';
import { ListProps } from './List.types';

const List: React.FC<ListProps> = ({ items, className }) => (
  <ul className={className}>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;

export interface ListProps {
  items: string[];
  className?: string;
}
