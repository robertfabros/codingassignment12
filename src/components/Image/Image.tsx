import React from 'react';
import { ImageProps } from './Image.types';

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className }) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            width={width} 
            height={height} 
            className={className} 
        />
    );
};

export default Image;