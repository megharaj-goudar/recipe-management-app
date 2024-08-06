import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { AuthProvider } from '../../context/AuthContext';

const MockComponent = () => <div>Private Content</div>;

test('redirects to login if not authenticated', () => {
  const { getByText } = render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route path="/private" element={<PrivateRoute element={MockComponent} />} />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );

  expect(getByText(/login page/i)).toBeInTheDocument();
});
