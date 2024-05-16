import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Router>
);
