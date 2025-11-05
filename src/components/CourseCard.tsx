import React from 'react';

interface CourseCardProps {
    title: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, imageUrl, onClick }) => {
    return (
        <div className="course-card" onClick={onClick}>
            <img src={imageUrl} alt={title} className="course-card-image" />
            <h3 className="course-card-title">{title}</h3>
            <p className="course-card-description">{description}</p>
        </div>
    );
};

export default CourseCard;