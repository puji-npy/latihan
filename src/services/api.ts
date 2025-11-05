import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchCourses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/courses`);
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

export const fetchCourseDetails = async (courseId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/courses/${courseId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching course details:', error);
        throw error;
    }
};

export const fetchLessons = async (courseId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/courses/${courseId}/lessons`);
        return response.data;
    } catch (error) {
        console.error('Error fetching lessons:', error);
        throw error;
    }
};