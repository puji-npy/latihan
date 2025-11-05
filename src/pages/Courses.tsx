import React from 'react';
import CourseCard from '../components/CourseCard';
import coursesData from '../../data/seeds/courses.json';

const Courses: React.FC = () => {
    return (
        <div className="courses-container">
            <h1>Available Courses</h1>
            <div className="courses-list">
                {coursesData.map(course => (
                    <CourseCard key={course.id} title={course.title} description={course.description} />
                ))}
            </div>
        </div>
    );
};

export default Courses;