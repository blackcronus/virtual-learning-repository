import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]); // State to store courses

    useEffect(() => {
        // Fetch courses data from backend
        fetch('http://localhost:5000/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data)) // Set fetched data to state
            .catch(error => console.error('Error fetching courses:', error));
    }, []); // Empty dependency array to run once on component mount

    return (
        <div>
            <h1>Course Catalog</h1>
            <div>
                {courses.map(course => (
                    <div key={course.id}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
