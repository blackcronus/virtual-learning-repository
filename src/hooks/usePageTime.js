// hooks/usePageTime.js
import { useEffect, useRef } from 'react';
import axios from 'axios';

const usePageTime = (page) => {
    const startTimeRef = useRef(Date.now());

    useEffect(() => {
        return () => {
            const timeSpent = (Date.now() - startTimeRef.current) / 1000; // Convert to seconds
            axios.post('/api/activity/log', { page, timeSpent }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).catch((err) => console.error('Failed to log activity:', err));
        };
    }, [page]);
};

export default usePageTime;
