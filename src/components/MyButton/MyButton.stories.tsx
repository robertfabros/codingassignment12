
import React from 'react';
import { Meta, Story } from '@storybook/react';
import MyButton from './MyButton';
import { MyButtonProps } from './MyButton.types';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    isVisible: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // Ensure background color control is available
  },
} as Meta;

const Template: Story<MyButtonProps & { isVisible: boolean; backgroundColor: string }> = ({
  isVisible,
  backgroundColor,
  ...args
}) => {
  // Determine the background color based on state
  const finalBackgroundColor = args.disabled
    ? backgroundColor
    : args.primary
    ? '#1e90ff' // Default primary color
    : '#808080'; // Default secondary color

  const buttonStyle = {
    backgroundColor: finalBackgroundColor, // Apply the computed background color
    cursor: args.disabled ? 'not-allowed' : 'pointer',
    opacity: args.disabled ? 0.5 : 1,
    padding: '10px 20px',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    display: isVisible ? 'inline-block' : 'none', // Use CSS to hide
  };

  return <MyButton {...args} style={buttonStyle} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  primary: true,
  disabled: false,
  isVisible: true,
  backgroundColor: '#ccc', // Default background color for Storybook control
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  primary: false,
  disabled: false,
  isVisible: true,
  backgroundColor: '#ccc', // Default background color for Storybook control
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  label: 'Disabled Primary Button',
  primary: true,
  disabled: true,
  isVisible: true,
  backgroundColor: '#aaa', // Background color when disabled
};

export const DisabledSecondary = Template.bind({});
DisabledSecondary.args = {
  label: 'Disabled Secondary Button',
  primary: false,
  disabled: true,
  isVisible: true,
  backgroundColor: '#aaa', // Background color when disabled
};
