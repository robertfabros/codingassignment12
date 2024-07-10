import React from 'react';
import { Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Image from './Image';
import { ImageProps } from './Image.types';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    className: { control: 'text' },
    isVisible: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ImageProps & { isVisible: boolean; disabled: boolean; backgroundColor: string }> = ({
  isVisible,
  disabled,
  backgroundColor,
  ...args
}) => {
  const imageStyle = {
    filter: disabled ? 'grayscale(100%)' : 'none',
    cursor: disabled ? 'not-allowed' : 'default',
    backgroundColor: disabled ? backgroundColor : '',
    display: isVisible ? 'block' : 'none', // Use CSS to hide
  };

  return (
    <div style={imageStyle}>
      <Image {...args} />
    </div>
  );
};

export const DefaultImage = Template.bind({});
DefaultImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: 150,
  height: 150,
  className: 'image-class',
  isVisible: true,
  disabled: false,
  backgroundColor: '#ccc',
};

DefaultImage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const image = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(image); // Simulate hover interaction
  // Add more interactions if needed
};

export const DisabledImage = Template.bind({});
DisabledImage.args = {
  ...DefaultImage.args,
  disabled: true,
  backgroundColor: '#ccc',
};

DisabledImage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const image = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(image); // Simulate hover interaction
  // Check for disabled styles if needed
};
