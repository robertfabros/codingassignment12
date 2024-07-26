import React from 'react';
import { Story, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Section, { SectionProps } from './Section';

export default {
  title: 'Components/Section',
  component: Section,
} as Meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Content inside section</div>,
  className: 'main-section',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const sectionElement = canvas.getByText('Content inside section').parentElement;
  await userEvent.hover(sectionElement);
};
