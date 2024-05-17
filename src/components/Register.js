import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../context/AuthContext';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const { registerUser, error } = useAuthDispatch();
    const { isAuthenticated } = useAuthState();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const success = await registerUser(formData);
        if (success) {
            setMessage('Registration successful! Please log in.');
        } else {
            setMessage(error || 'Failed to register');
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Register</button>
                {message && <p className="error-message">{message}</p>}
            </form>
        </div>
    );
};

export default Register;
