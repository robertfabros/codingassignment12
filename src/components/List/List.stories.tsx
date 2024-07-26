import React from 'react';
import { Story, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import List, { ListProps } from './List';
import '../../App.css';

export default {
  title: 'Components/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  className: 'programming-languages',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const listItems = canvas.getAllByRole('listitem');
  
  // Hover over each list item
  listItems.forEach(item => {
    userEvent.hover(item);
  });
};
