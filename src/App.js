import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/routing/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Register from './components/Register';
import Login from './components/Login';
import Programming from './components/resources/Programming';
import Painting from './components/resources/Painting';
import Cooking from './components/resources/Cooking';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Catalog />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/programming" element={<Programming />} />
                <Route path="/painting" element={<Painting />} />
                <Route path="/cooking" element={<Cooking />} />
            </Routes>
        </>
    );
}

export default App;
