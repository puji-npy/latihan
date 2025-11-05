import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Lessons from './pages/Lessons';
import About from './pages/About';
import './styles/globals.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/courses" exact component={Courses} />
                <Route path="/courses/:id" component={CourseDetail} />
                <Route path="/lessons/:courseId" component={Lessons} />
                <Route path="/about" component={About} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;