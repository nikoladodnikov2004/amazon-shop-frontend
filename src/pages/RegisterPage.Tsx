import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function RegisterPage() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle registration logic here
  console.log('Registration attempted:', { FirstName, LastName, email, password });
};

return (
  <div>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account? <Link to="/login">Login here</Link>
    </p>
  </div>
);

}
