import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Category from '../Category';

test('renders categories and calls filterByCategory on change', () => {
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];
  const filterByCategory = jest.fn();
  const { getByRole } = render(<Category categories={categories} filterByCategory={filterByCategory} />);

  const select = getByRole('combobox');
  fireEvent.change(select, { target: { value: 'Lunch' } });

  expect(filterByCategory).toHaveBeenCalledWith('Lunch');
});
