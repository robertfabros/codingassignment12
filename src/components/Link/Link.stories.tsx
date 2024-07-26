import React from 'react';
import { Story, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Link, { LinkProps } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Clickable = Template.bind({});
Clickable.args = {
  href: '/',
  children: 'Home',
  className: 'clickable-link',
};

Clickable.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Home');
  await userEvent.hover(linkElement);
};
