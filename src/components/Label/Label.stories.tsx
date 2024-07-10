import React from 'react';
import { Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    htmlFor: { control: 'text' },
    className: { control: 'text' },
    isVisible: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LabelProps & { isVisible: boolean; disabled: boolean; backgroundColor: string }> = ({
  isVisible,
  disabled,
  backgroundColor,
  ...args
}) => {
  const labelStyle = {
    color: disabled ? '#aaa' : '',
    cursor: disabled ? 'not-allowed' : 'default',
    backgroundColor: disabled ? backgroundColor : '',
    display: isVisible ? 'inline-block' : 'none', // Use CSS to hide
    margin: '10px',
  };

  return (
    <label htmlFor={args.htmlFor} className={args.className} style={labelStyle}>
      {args.text}
    </label>
  );
};

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  text: 'Label Text',
  htmlFor: 'inputId',
  className: 'label-class',
  isVisible: true,
  disabled: false,
  backgroundColor: '#ccc',
};

DefaultLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText('Label Text');
  await userEvent.hover(label); // Simulate hover interaction
  // Add more interactions if needed
};

export const DisabledLabel = Template.bind({});
DisabledLabel.args = {
  ...DefaultLabel.args,
  disabled: true,
  backgroundColor: '#ccc',
};

DisabledLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText('Label Text');
  await userEvent.hover(label); // Simulate hover interaction
  // Check for disabled styles if needed
};
