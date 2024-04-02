import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register'; // Adjusted to the correct path

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
        </header>
        <Routes>
          {/* Route for the Registration page */}
          <Route path="/register" element={<Register />} />
          {/* You can add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
