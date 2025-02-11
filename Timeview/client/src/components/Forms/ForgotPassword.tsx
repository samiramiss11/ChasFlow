import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword({ history }) {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/reset-password', { email, token, newPassword });
            setMessage('Your password has been reset successfully.');
            setTimeout(() => history.push('/login'), 2000);  // Redirect to login after 2 seconds
        } catch (error) {
            setMessage('Failed to reset password.');
        }
    };

    return (
        <div>
            <form onSubmit={handleResetPassword}>
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
                    <label htmlFor="token">Token:</label>
                    <input
                        type="text"
                        id="token"
                        value={token}
                        onChange={e => setToken(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="newPassword">New Password:</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default ResetPassword;
