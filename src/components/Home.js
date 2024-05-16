import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="content">
                <h1>Welcome to the Virtual Learning Repository!</h1>
                <p>Explore a vast range of online courses to advance your skills at your own pace.</p>
                <button onClick={() => window.location.href = '/courses'}>Browse Courses</button>
                <button onClick={() => window.location.href = '/login'}>Sign In</button>
                <button onClick={() => window.location.href = '/register'}>Register</button>
            </div>
        </div>
    );
};

export default Home;
