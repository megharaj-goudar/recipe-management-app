import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>Category: {recipe.category}</p>
      <Link to={`/recipe-details/${recipe.id}`}>View Details</Link>
      <Link to={`/edit-recipe/${recipe.id}`}>Edit</Link>
    </div>
  );
};

export default RecipeItem;