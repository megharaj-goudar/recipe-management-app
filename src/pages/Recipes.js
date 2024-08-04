import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import RecipeList from '../components/RecipeList';
import Category from '../components/Category';
import '../App.css'; 

const Recipes = () => {
  const { recipes, loading, error } = useRecipes();
  const [category, setCategory] = useState('');

  const filterByCategory = (category) => {
    setCategory(category);
  };

  const filteredRecipes = category
    ? recipes.filter((recipe) => recipe.category === category)
    : recipes;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='recipes'>
      <h1>Recipes</h1>
      <Link to="/add-recipe">Add New Recipe</Link>
      <Category
        categories={['Breakfast', 'Lunch', 'Dinner', 'Dessert']}
        filterByCategory={filterByCategory}
      />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Recipes;