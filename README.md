# Education Website

Welcome to the Education Website project! This project is designed to provide a platform for users to explore various educational courses and lessons. Below is an overview of the project's structure and features.

## Project Structure

```
education-website
├── src
│   ├── index.tsx            # Entry point of the React application
│   ├── App.tsx              # Main App component with routing
│   ├── components            # Reusable components
│   │   ├── Header.tsx       # Navigation and branding
│   │   ├── Footer.tsx       # Copyright and additional links
│   │   ├── CourseCard.tsx   # Summary of a course
│   │   └── LessonPlayer.tsx  # Playback of lessons
│   ├── pages                # Different pages of the application
│   │   ├── Home.tsx         # Landing page
│   │   ├── Courses.tsx      # List of available courses
│   │   ├── CourseDetail.tsx  # Detailed information about a course
│   │   ├── Lessons.tsx      # List of lessons for a selected course
│   │   └── About.tsx        # Information about the website
│   ├── styles               # CSS styles
│   │   ├── globals.css      # Global styles
│   │   └── components.css    # Component-specific styles
│   ├── hooks                # Custom hooks
│   │   └── useAuth.ts       # User authentication management
│   ├── services             # API calls
│   │   └── api.ts           # Functions for fetching data
│   └── types                # TypeScript types and interfaces
│       └── index.ts         # Common types
├── data                     # Sample data
│   └── seeds
│       └── courses.json     # Sample course data
├── tests                    # Unit tests
│   └── App.test.tsx         # Tests for the App component
├── public                   # Public assets
│   └── robots.txt           # Instructions for web crawlers
├── .gitignore               # Files to ignore in version control
├── package.json             # npm configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # Project documentation
```

## Features

- **User Authentication**: Manage user login and registration with the `useAuth` hook.
- **Course Listings**: Browse through a variety of courses on the Courses page.
- **Detailed Course Information**: View detailed information about each course on the CourseDetail page.
- **Lesson Playback**: Access lessons with the LessonPlayer component.
- **Responsive Design**: The website is designed to be responsive and user-friendly.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd education-website
npm install
```

Then, you can run the development server:

```bash
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.