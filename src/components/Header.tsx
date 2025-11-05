import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="logo">Education Website</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;