import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

function Catalog() {
    return (
        <div className="catalog-container">
            <h1>Course Catalog</h1>
            <div className="catalog-buttons">
                <Link to="/programming" className="catalog-button">Programming</Link>
                <Link to="/painting" className="catalog-button">Painting</Link>
                <Link to="/cooking" className="catalog-button">Cooking</Link>
            </div>
        </div>
    );
}

export default Catalog;
