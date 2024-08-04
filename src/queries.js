import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
  query GetRecipes {
    getRecipes {
      id
      title
      ingredients
      instructions
      category
      date
      userId
    }
  }
`;

export const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      title
      ingredients
      instructions
      category
      date
      userId
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation AddRecipe($title: String!, $ingredients: [String!]!, $instructions: String!, $category: String!, $date: String!) {
    addRecipe(title: $title, ingredients: $ingredients, instructions: $instructions, category: $category, date: $date) {
      id
      title
      ingredients
      instructions
      category
      date
      userId
    }
  }
`;

export const EDIT_RECIPE = gql`
  mutation EditRecipe($id: ID!, $title: String, $ingredients: [String!], $instructions: String, $category: String, $date: String) {
    editRecipe(id: $id, title: $title, ingredients: $ingredients, instructions: $instructions, category: $category, date: $date) {
      id
      title
      ingredients
      instructions
      category
      date
      userId
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($id: ID!) {
    deleteRecipe(id: $id)
  }
`;