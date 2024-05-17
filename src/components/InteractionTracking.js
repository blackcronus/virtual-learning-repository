import React, { useEffect, useState } from 'react';
import { useAuthState, useAuthDispatch } from '../context/AuthContext';

const InteractionTracking = ({ discipline }) => {
    const { user, isAuthenticated } = useAuthState();
    const { updateInteractionTime } = useAuthDispatch();
    const [timeSpent, setTimeSpent] = useState(0);

    useEffect(() => {
        let interval;
        if (isAuthenticated) {
            interval = setInterval(() => {
                setTimeSpent((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isAuthenticated]);

    useEffect(() => {
        const saveInteractionTime = async () => {
            if (isAuthenticated && timeSpent > 0) {
                await updateInteractionTime(discipline, timeSpent);
            }
        };
        window.addEventListener('beforeunload', saveInteractionTime);
        return () => window.removeEventListener('beforeunload', saveInteractionTime);
    }, [isAuthenticated, discipline, timeSpent, updateInteractionTime]);

    useEffect(() => {
        if (isAuthenticated && timeSpent > 0) {
            updateInteractionTime(discipline, timeSpent);
        }
    }, [timeSpent, isAuthenticated, discipline, updateInteractionTime]);

    return isAuthenticated ? (
        <div>
            <p>You have spent {timeSpent} seconds on {discipline}.</p>
        </div>
    ) : null;
};

export default InteractionTracking;
