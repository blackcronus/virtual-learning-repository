import React from 'react';
import './Resources.css';

function Painting() {
    return (
        <div className="resource-container">
            <h1 className="resource-title">Painting Resources</h1>
            <div className="resource-links">
                <a href="https://www.skillshare.com" target="_blank" rel="noopener noreferrer" className="resource-button">Skillshare</a>
                <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="resource-button">Coursera</a>
                <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="resource-button">Udemy</a>
                <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="resource-button">Khan Academy</a>
                <a href="https://www.domestika.org" target="_blank" rel="noopener noreferrer" className="resource-button">Domestika</a>
            </div>
        </div>
    );
}

export default Painting;
