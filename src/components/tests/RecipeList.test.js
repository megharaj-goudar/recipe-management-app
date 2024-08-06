import React from 'react';
import { render } from '@testing-library/react';
import RecipeList from '../RecipeList';

test('renders recipe list', () => {
  const recipes = [
    { id: 1, title: 'Test Recipe 1', category: 'Lunch' },
    { id: 2, title: 'Test Recipe 2', category: 'Dinner' },
  ];

  const { getByText } = render(<RecipeList recipes={recipes} />);

  expect(getByText(/test recipe 1/i)).toBeInTheDocument();
  expect(getByText(/test recipe 2/i)).toBeInTheDocument();
});
