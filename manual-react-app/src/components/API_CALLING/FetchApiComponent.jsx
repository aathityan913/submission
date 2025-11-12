import React, { useState } from 'react';
import DisplayTokenComponent from './DisplayTokenComponent';
const API_BASE = 'https://localhost:7016'; // Your backend URL

export default function AuthForm() {
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rolesInput, setRolesInput] = useState(''); // Only for register
  const [loading, setLoading] = useState(false);
  const [jwt, setJwt] = useState(localStorage.getItem('jwt') || '');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const resetFeedback = () => {
    setMessage('');
    setError('');
  };

  // ----------------- LOGIN -----------------
  const handleLogin = async () => {
    resetFeedback();
    setLoading(true);

    try {
      const payload = { Email: email, Password: password };
      const res = await fetch(`${API_BASE}/api/Auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Unexpected response: ${text.substring(0, 200)}`);
      }

      if (!res.ok) {
        throw new Error(data?.Message || 'Login failed');
      }

      setJwt(data.token);
      localStorage.setItem('jwt', data.token);
      setUser(data.User);
      setMessage(data.Message || 'Logged in successfully.');
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // ----------------- REGISTER -----------------
  const handleRegister = async () => {
    resetFeedback();
    setLoading(true);

    try {
      const roles = rolesInput
        .split(',')
        .map(r => r.trim())
        .filter(r => r.length > 0);

      const payload = { Email: email, Password: password, Roles: roles.length ? roles : null };

      const res = await fetch(`${API_BASE}/api/Auth/Register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      if (!res.ok) throw new Error(text || 'Registration failed');

      setMessage(text || 'Registered successfully.');
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setJwt('');
    setUser(null);
    setMessage('Logged out.');
    setError('');
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (mode === 'login') {
      await handleLogin();
    } else {
      await handleRegister();
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '2rem auto', padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
      <h2 style={{ marginTop: 0 }}>Auth</h2>

      {/* Mode toggle */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button
          type="button"
          onClick={() => { setMode('login'); resetFeedback(); }}
          style={{
            padding: '0.5rem 1rem',
            background: mode === 'login' ? '#222' : '#eee',
            color: mode === 'login' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: 4
          }}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => { setMode('register'); resetFeedback(); }}
          style={{
            padding: '0.5rem 1rem',
            background: mode === 'register' ? '#222' : '#eee',
            color: mode === 'register' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: 4
          }}
        >
          Register
        </button>
      </div>

      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            style={{ width: '100%' }}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </label>

        {mode === 'register' && (
          <label>
            Roles (comma-separated):
            <input
              type="text"
              value={rolesInput}
              onChange={e => setRolesInput(e.target.value)}
              placeholder="Admin,User"
              style={{ width: '100%' }}
            />
          </label>
        )}

        <button type="submit" disabled={loading} style={{ padding: '0.5rem 1rem' }}>
          {loading ? 'Please wait…' : mode === 'register' ? 'Register' : 'Login'}
        </button>


        {/* User info */}
        {user && (
          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 600 }}>User Info:</div>
            <p><strong>ID:</strong> {user.UserID}</p>
            <p><strong>Name:</strong> {user.Name}</p>
            <p><strong>Email:</strong> {user.Email}</p>
            <p><strong>Roles:</strong> {user.Roles?.join(', ')}</p>
          </div>
        )}

        {/* Feedback */}
        {message && <div style={{ color: 'green' }}>{message}</div>}
        {error && <div style={{ color: 'crimson' }}>{error}</div>}
      </form>

      <div>
        <DisplayTokenComponent/>
      </div>
    </div>
  );
}
