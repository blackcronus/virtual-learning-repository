import React, { createContext, useReducer, useContext } from 'react';
import authReducer from './authReducer';
import { LOGIN_USER, REGISTER_USER } from './types';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
};

const useAuthState = () => useContext(AuthStateContext);
const useAuthDispatch = () => useContext(AuthDispatchContext);

const loginUser = async (dispatch, loginPayload) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };

    try {
        let response = await fetch('/api/auth/login', requestOptions);
        let data = await response.json();

        if (data.user) {
            dispatch({ type: LOGIN_USER, payload: data });
            return data;
        }

        throw new Error(data.message);
    } catch (error) {
        console.log(error);
    }
};

const registerUser = async (dispatch, registerPayload) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerPayload),
    };

    try {
        let response = await fetch('/api/auth/register', requestOptions);
        let data = await response.json();

        if (data.user) {
            dispatch({ type: REGISTER_USER, payload: data });
            return data;
        }

        throw new Error(data.message);
    } catch (error) {
        console.log(error);
    }
};

export { AuthProvider, useAuthState, useAuthDispatch, loginUser, registerUser };
