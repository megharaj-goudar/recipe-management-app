import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import RecipeForm from '../components/RecipeForm';

const AddEditRecipe = () => {
  const { id } = useParams();
  const { recipes } = useRecipes();
  const recipe = recipes.find((recipe) => recipe.id === id);

  return (
    <div>
      <h1>{id ? 'Edit Recipe' : 'Add Recipe'}</h1>
      <RecipeForm recipe={recipe} />
    </div>
  );
};

export default AddEditRecipe;
