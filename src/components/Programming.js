import React from 'react';
import './Resources.css';

const Programming = () => {
    return (
        <div className="resources-container">
            <h1>Programming Resources</h1>
            <ul>
                <li><a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">Codecademy</a></li>
                <li><a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></li>
                <li><a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">Coursera</a></li>
                <li><a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">Udemy</a></li>
                <li><a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer">Khan Academy</a></li>
                {/* Add more resources as needed */}
            </ul>
        </div>
    );
};

export default Programming;
