// src/components/ContactForm/ContactForm.test.tsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm Component', () => {
  test('renders ContactForm component', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test('shows error messages when form is submitted without filling required fields', () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByText(/Submit/i));
    expect(screen.getByText(/Please enter your name./i)).toBeVisible();
    expect(screen.getByText(/Please enter your email address./i)).toBeVisible();
    expect(screen.getByText(/Please enter your phone number./i)).toBeVisible();
    expect(screen.getByText(/Please enter a message./i)).toBeVisible();
  });
});
