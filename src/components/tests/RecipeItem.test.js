import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeItem from '../RecipeItem';

test('renders recipe item', () => {
  const recipe = { id: 1, title: 'Test Recipe', category: 'Lunch' };

  const { getByText } = render(
    <MemoryRouter>
      <RecipeItem recipe={recipe} />
    </MemoryRouter>
  );

  expect(getByText(/test recipe/i)).toBeInTheDocument();
  expect(getByText(/lunch/i)).toBeInTheDocument();
});
