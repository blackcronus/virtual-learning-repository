import React, { useState } from 'react';

const Register = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Send formData to backend
        fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success, e.g., redirect or display a success message
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors, e.g., display error message
        });
    };

    // Registration form
    return (
        <form onSubmit={handleSubmit}>
            <h1>Register Page</h1>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
