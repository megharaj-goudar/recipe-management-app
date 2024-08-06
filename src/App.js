import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client'; // Import ApolloProvider here
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Recipes from './pages/Recipes';
import AddEditRecipe from './pages/AddEditRecipe';
import PrivateRoute from './components/PrivateRoute';
import { RecipeProvider } from './context/RecipeContext';
import { AuthProvider } from './context/AuthContext';
import client from './apolloClient'; // Import Apollo Client instance
import './App.css';
import RecipeDetails from './pages/RecipeDetails';

const App = () => {
  return (
    <AuthProvider>
      <RecipeProvider>
        <ApolloProvider client={client}> {/* Wrap with ApolloProvider */}
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/recipes" element={<PrivateRoute element={Recipes} />} />
              <Route path="/add-recipe" element={<PrivateRoute element={AddEditRecipe} />} />
              <Route path="/edit-recipe/:id" element={<PrivateRoute element={AddEditRecipe} />} />
              <Route path="/recipe-details/:id" element={<PrivateRoute element={RecipeDetails} />} />
            </Routes>
          </Router>
        </ApolloProvider>
      </RecipeProvider>
    </AuthProvider>
  );
};

export default App;