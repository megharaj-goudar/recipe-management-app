import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];

const RecipeForm = ({ recipe }) => {
  const { addRecipe, updateRecipe } = useRecipes();
  const [formState, setFormState] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category: '',
    date: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (recipe) {
      setFormState(recipe);
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe) {
      updateRecipe({ ...formState, id: recipe.id }); // Pass the ID when updating
    } else {
      addRecipe(formState);
    }
    navigate('/recipes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <select
          name="category"
          value={formState.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
          required
        />
      </label>
      
      <label>
        Ingredients:
        <textarea
          name="ingredients"
          value={formState.ingredients}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Instructions:
        <textarea
          name="instructions"
          value={formState.instructions}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formState.date}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate('/recipes')}>
        Cancel
      </button>
    </form>
  );
};

export default RecipeForm;
