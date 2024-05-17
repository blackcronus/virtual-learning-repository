import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useAuthDispatch, logoutUser } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { isAuthenticated, user } = useAuthState();
    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        logoutUser(dispatch);
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            {!isAuthenticated ? (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            ) : (
                <>
                    <span>Welcome, {user && user.email}</span>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </nav>
    );
};

export default Navbar;
