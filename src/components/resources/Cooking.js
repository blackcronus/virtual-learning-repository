import React from 'react';
import './Resources.css';

function Cooking() {
    return (
        <div className="resource-container">
            <h1 className="resource-title">Cooking Resources</h1>
            <div className="resource-links">
                <a href="https://www.masterclass.com" target="_blank" rel="noopener noreferrer" className="resource-button">MasterClass</a>
                <a href="https://www.skillshare.com" target="_blank" rel="noopener noreferrer" className="resource-button">Skillshare</a>
                <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="resource-button">Coursera</a>
                <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="resource-button">Udemy</a>
                <a href="https://www.thekitchn.com" target="_blank" rel="noopener noreferrer" className="resource-button">The Kitchn</a>
            </div>
        </div>
    );
}

export default Cooking;
