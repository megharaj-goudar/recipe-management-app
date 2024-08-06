import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to TastyTrackerApp</h1>
      <h3>Manage your recipes easily.</h3>
      <Link to="/signup">Click here to Signup </Link>
      <br/><br/>
      <Link to="/recipes">Go to Recipes</Link>
    </div>
  );
};

export default Home;