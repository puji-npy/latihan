import React from 'react';

interface LessonPlayerProps {
    lessonTitle: string;
    lessonContent: string;
}

const LessonPlayer: React.FC<LessonPlayerProps> = ({ lessonTitle, lessonContent }) => {
    return (
        <div className="lesson-player">
            <h2>{lessonTitle}</h2>
            <div className="lesson-content">
                {lessonContent}
            </div>
        </div>
    );
};

export default LessonPlayer;