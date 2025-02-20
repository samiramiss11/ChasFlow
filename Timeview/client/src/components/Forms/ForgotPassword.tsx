import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/forgot-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Failed to send reset email');
        }
    };

    return (
        <div>
            <form onSubmit={handleForgotPassword}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <button type="submit">Send Reset Email</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default ForgotPassword;
