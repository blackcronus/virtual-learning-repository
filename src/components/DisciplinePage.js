// components/DisciplinePage.js
import React from 'react';
import usePageTime from '../hooks/usePageTime';

const DisciplinePage = ({ discipline }) => {
    usePageTime(discipline);

    return (
        <div>
            <h1>{discipline}</h1>
            {/* Your content here */}
        </div>
    );
};

export default DisciplinePage;
