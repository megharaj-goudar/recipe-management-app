import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header >
      <nav>
        <Link className='home' to="/">Home</Link>
        {isAuthenticated && (
          <>
            <Link to="/recipes">Recipes</Link>
            <button className="lgtButton" onClick={handleLogout}>Logout</button>
          </>
        )}
        {!isAuthenticated && <Link to="/login">Login</Link>}
      </nav>
    </header>
  );
};

export default Header;