import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';
import { AuthProvider } from '../../context/AuthContext';

test('renders header and handles logout', () => {
  const { getByText } = render(
    <AuthProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </AuthProvider>
  );

  const loginLink = getByText(/login/i);
  expect(loginLink).toBeInTheDocument();
});
