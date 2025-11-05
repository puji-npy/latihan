import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCourseDetails } from '../services/api';

const CourseDetail: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCourseDetails = async () => {
            try {
                const data = await fetchCourseDetails(courseId);
                setCourse(data);
            } catch (err) {
                setError('Failed to fetch course details');
            } finally {
                setLoading(false);
            }
        };

        getCourseDetails();
    }, [courseId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <h2>Lessons</h2>
            <ul>
                {course.lessons.map((lesson: any) => (
                    <li key={lesson.id}>{lesson.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseDetail;