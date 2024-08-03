import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '', role: 'public' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', credentials);
      // Redirect or notify success
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={credentials.username} onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
      <select name="role" value={credentials.role} onChange={handleChange}>
        <option value="public">Public</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
