// components/UserActivity.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from '../context/AuthContext';

const UserActivity = () => {
    const { user, token } = useAuthState();
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get(`/api/activity/${user._id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setActivities(res.data);
        }).catch((err) => console.error('Failed to fetch activity:', err));
    }, [user, token]);

    return (
        <div>
            <h2>User Activity</h2>
            <ul>
                {activities.map((activity) => (
                    <li key={activity._id}>
                        {activity.page}: {activity.timeSpent} seconds
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserActivity;
