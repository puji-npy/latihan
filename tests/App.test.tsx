import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the header', () => {
  render(<App />);
  const headerElement = screen.getByText(/navigation/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders the footer', () => {
  render(<App />);
  const footerElement = screen.getByText(/copyright/i);
  expect(footerElement).toBeInTheDocument();
});

test('renders the home page', () => {
  render(<App />);
  const homeElement = screen.getByText(/welcome to the education website/i);
  expect(homeElement).toBeInTheDocument();
});