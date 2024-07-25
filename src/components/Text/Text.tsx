import React from 'react';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({ content, className, style, tag: Tag = 'p' }) => (
  <Tag className={className} style={style}>
    {content}
  </Tag>
);

export default Text;