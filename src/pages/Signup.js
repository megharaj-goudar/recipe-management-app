import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            mutation Signup($username: String!, $password: String!) {
              signup(username: $username, password: $password) {
                token
              }
            }
          `,
          variables: {
            username: formState.username,
            password: formState.password,
          },
        }),
      });

      const result = await response.json();

      if (result.data && result.data.signup) {
        const token = result.data.signup.token;
        localStorage.setItem('token', token);
        navigate('/login'); // Redirect to login page after signup
      } else {
        throw new Error(result.errors ? result.errors[0].message : 'Signup failed');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Signup;
