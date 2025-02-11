import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 

type ResetPasswordProps = {
    // We can define any props if necessary, or i will remove if none are needed
};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const navigate = useNavigate(); // Using useNavigate for redirection

    const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/reset-password', {
                email,
                token,
                newPassword
            });
            setMessage('Your password has been reset successfully.');
            setTimeout(() => navigate('/login'), 2000);  // Redirect to login after 2 seconds using navigate
        } catch (error: any) {
            setMessage('Failed to reset password. ' + (error.response?.data?.message || ''));
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
