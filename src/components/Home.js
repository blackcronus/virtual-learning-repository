import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={homeStyle}>
      <h1>Welcome to the Virtual Learning Repository</h1>
      <p>This platform provides access to a wide range of online courses to help you learn at your own pace.</p>
      <div>
        <Link to="/courses" style={linkStyle}>Browse Courses</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
      </div>
    </div>
  );
};

const homeStyle = {
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px'
};

const linkStyle = {
  margin: '10px',
  padding: '10px',
  backgroundColor: '#333',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px'
};

export default Home;
