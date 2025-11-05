export interface Course {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
}

export interface Lesson {
    id: string;
    title: string;
    content: string;
    videoUrl?: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    isAuthenticated: boolean;
}