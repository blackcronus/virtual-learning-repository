import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// Create context
const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: true,
    error: null
};

// Define types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_ERROR = 'REGISTER_ERROR';
const LOGOUT = 'LOGOUT';

// Reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                error: null // Clear any errors on successful login/register
            };
        case LOGIN_ERROR:
        case REGISTER_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                loading: false,
                error: action.payload // Store error message
            };
        default:
            return state;
    }
};

// Register user function
const registerUser = async (dispatch, formData) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/register`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        return true;
    } catch (err) {
        dispatch({
            type: REGISTER_ERROR,
            payload: err.response.data.message // Adjusted to only pass error message
        });
        return false;
    }
};

// Login user function
const loginUser = async (dispatch, formData) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/login`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        return true;
    } catch (err) {
        dispatch({
            type: LOGIN_ERROR,
            payload: err.response.data.message // Adjusted to only pass error message
        });
        return false;
    }
};

// Logout user function
const logoutUser = (dispatch) => {
    dispatch({ type: LOGOUT });
};

// Context provider
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                ...state,
                registerUser: (formData) => registerUser(dispatch, formData),
                loginUser: (formData) => loginUser(dispatch, formData),
                logoutUser: () => logoutUser(dispatch),
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hooks
const useAuthState = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthState must be used within an AuthProvider');
    }
    return context;
};

const useAuthDispatch = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthDispatch must be used within an AuthProvider');
    }
    return context.dispatch;
};

export { AuthProvider, useAuthState, useAuthDispatch, registerUser, loginUser, logoutUser };
