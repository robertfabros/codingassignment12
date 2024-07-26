// src/components/ContactForm/ContactForm.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import ContactForm, { ContactFormProps } from './ContactForm';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
} as Meta;

const Template: Story<ContactFormProps> = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nameInput = canvas.getByLabelText(/Name/i);
  const emailInput = canvas.getByLabelText(/Email/i);
  const phoneInput = canvas.getByLabelText(/Phone Number/i);
  const messageInput = canvas.getByLabelText(/Message/i);
  const submitButton = canvas.getByText(/Submit/i);

  await userEvent.type(nameInput, 'John Doe');
  await userEvent.type(emailInput, 'john.doe@example.com');
  await userEvent.type(phoneInput, '1234567890');
  await userEvent.type(messageInput, 'This is a test message.');
  await userEvent.click(submitButton);
};
