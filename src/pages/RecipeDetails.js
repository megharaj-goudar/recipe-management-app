import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      title
      category
      ingredients
      instructions
    }
  }
`;

const RecipeDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.getRecipe) return <p>No recipe found</p>;

  const recipe = data.getRecipe;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Category: {recipe.category}</p>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
