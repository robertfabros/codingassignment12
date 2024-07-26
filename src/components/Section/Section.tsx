import React from 'react';
import { SectionProps } from './Section.types';

const Section: React.FC<SectionProps> = ({ children, className }) => (
  <section className={className}>
    {children}
  </section>
);

export default Section;

// Section.types.ts
export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
