<<<<<<< Updated upstream:Timeview/client/src/pages/LoginPage.jsx
import React, { useState } from 'react';
=======
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const authContext =  useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ('login' in authContext) {  // Type check to avoid TypeScript error
        await authContext.login(credentials.email, credentials.password);
        navigate('/ProfileSetting'); // Updated method to navigate
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <button type="submit">Login</button>
            <a href="/ForgotPassword">Forgot Password?</a>
        </form>
    );
};

export default LoginPage;
/* import React, { useState, FormEvent  } from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes:Timeview/client/src/pages/LoginPage.tsx
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function LoginPage({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

<<<<<<< Updated upstream:Timeview/client/src/pages/LoginPage.jsx
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
            if (response.data.auth) {
                localStorage.setItem('token', response.data.token);
                history.push('/landingpage');
            }
        } catch (error) {
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
            <button onClick={() => history.push('/forgot-password')}>Forgot Password?</button>
        </div>
    );
}
=======
const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/profile-setting'); // Navigate to dashboard on success
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data.message : 'Server did not respond');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
>>>>>>> Stashed changes:Timeview/client/src/pages/LoginPage.tsx

export default LoginPage; */
