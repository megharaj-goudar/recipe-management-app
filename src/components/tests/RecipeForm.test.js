import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeForm from '../RecipeForm';
import { RecipeProvider } from '../../context/RecipeContext';

test('renders recipe form and handles submit', () => {
  const addRecipe = jest.fn();
  const updateRecipe = jest.fn();
  const recipe = { id: 1, title: 'Test Recipe', ingredients: 'Test Ingredient', instructions: 'Test Instructions', category: 'Lunch', date: '2023-01-01' };

  const { getByLabelText, getByText } = render(
    <RecipeProvider value={{ addRecipe, updateRecipe }}>
      <MemoryRouter>
        <RecipeForm recipe={recipe} />
      </MemoryRouter>
    </RecipeProvider>
  );

  const titleInput = getByLabelText(/title/i);
  fireEvent.change(titleInput, { target: { value: 'Updated Recipe' } });

  const submitButton = getByText(/save/i);
  fireEvent.click(submitButton);

  expect(updateRecipe).toHaveBeenCalled();
});
