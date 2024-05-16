import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch, loginUser } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await loginUser(dispatch, { email, password });
            navigate('/courses');
        } catch (err) {
            setError('Failed to log in');
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
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
                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
