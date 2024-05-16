import React from 'react';
import './Resources.css';

function Programming() {
    return (
        <div className="resource-container">
            <h1 className="resource-title">Programming Resources</h1>
            <div className="resource-links">
                <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer" className="resource-button">Codecademy</a>
                <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer" className="resource-button">FreeCodeCamp</a>
                <a href="https://www.udacity.com" target="_blank" rel="noopener noreferrer" className="resource-button">Udacity</a>
                <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="resource-button">Udemy</a>
                <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="resource-button">Khan Academy</a>
            </div>
        </div>
    );
}

export default Programming;
