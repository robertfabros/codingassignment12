import React from 'react';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({ content, className, style }) => {
    return (
        <p className={className} style={style}>
            {content}
        </p>
    );
};

export default Text;