// src/components/Navmobile/Navmobile.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Navmobile from './Navmobile';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Navmobile',
  component: Navmobile,
} as Meta;

const Template: Story = (args) => <Navmobile {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const homeLink = canvas.getByText('Home');

  // Simulate hover
  await userEvent.hover(homeLink);
};
