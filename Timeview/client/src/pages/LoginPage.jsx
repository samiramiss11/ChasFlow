import React, { useState } from 'react';
import axios from 'axios';

function LoginPage({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

export default LoginPage;
