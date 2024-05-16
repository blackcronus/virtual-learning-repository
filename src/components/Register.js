import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch, registerUser } from '../context/AuthContext';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser(dispatch, { email, password });
            navigate('/courses');
        } catch (err) {
            setError('Failed to register');
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Register</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Register;
