import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', user.token); // Store token in localStorage
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token'); // Remove token from localStorage
    }
  }, [user]);

  const login = async ({ username, password }) => {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          mutation {
            login(username: "${username}", password: "${password}") {
              token
            }
          }
        `,
      }),
    });

    const result = await response.json();
    if (result.data && result.data.login && result.data.login.token) {
      const token = result.data.login.token;
      setUser({ username, token });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
