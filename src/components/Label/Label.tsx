import React from 'react';
import { LabelProps } from './Label.types';
const Label: React.FC<LabelProps> = ({ text, htmlFor, className }) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {text}
        </label>
    );
};

export default Label;