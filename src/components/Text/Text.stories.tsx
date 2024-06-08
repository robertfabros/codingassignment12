
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
    isVisible: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TextProps & { isVisible: boolean; disabled: boolean; backgroundColor: string }> = ({
  isVisible,
  disabled,
  backgroundColor,
  ...args
}) => {
  const textStyle = {
    color: disabled ? '#aaa' : '',
    cursor: disabled ? 'not-allowed' : 'default',
    backgroundColor: disabled ? backgroundColor : '',
    fontSize: '16px',
    margin: '10px',
    display: isVisible ? 'block' : 'none', // Use CSS to hide
  };

  return (
    <p className={args.className} style={{ ...textStyle, ...args.style }}>
      {args.content}
    </p>
  );
};

export const DefaultText = Template.bind({});
DefaultText.args = {
  content: 'This is a text component',
  className: 'text-class',
  style: {},
  isVisible: true,
  disabled: false,
  backgroundColor: '#ccc',
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  ...DefaultText.args,
  disabled: true,
  backgroundColor: '#ccc',
};
