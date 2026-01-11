import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/companies.css';

const FutureaceAcademy = () => {
    return (
        <div className="company-page">
            <Header />

            <div className="company-hero">
                <img
                    src="/images/futureace_academy_1768147131521.png"
                    alt="Futureace Academy"
                    className="company-hero-image"
                />
                <div className="company-hero-overlay">
                    <div className="company-hero-content">
                        <h1>Futureace Academy</h1>
                        <p>Pioneering Healthcare Education with AI-Powered Learning</p>
                    </div>
                </div>
            </div>

            <div className="company-content">
                <Link to="/" className="back-button">← Back to Home</Link>

                <div className="content-section">
                    <h2>About Futureace Academy</h2>
                    <p>
                        Futureace Academy is revolutionizing medical education by integrating artificial intelligence
                        with traditional healthcare training. We offer cutting-edge courses designed to prepare the
                        next generation of medical professionals for the challenges of modern healthcare.
                    </p>
                    <p>
                        Our AI-powered learning platform provides personalized education paths, interactive simulations,
                        and real-world case studies. Students gain hands-on experience with the latest medical technologies
                        while developing critical thinking and clinical decision-making skills.
                    </p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">5000+</span>
                        <span className="stat-label">Students</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">100+</span>
                        <span className="stat-label">Courses</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Expert Faculty</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">95%</span>
                        <span className="stat-label">Placement Rate</span>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Our Programs</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>AI-Powered Diagnostics</h3>
                            <p>Learn to leverage AI tools for accurate disease diagnosis and treatment planning.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Virtual Reality Training</h3>
                            <p>Immersive VR simulations for surgical procedures and patient care scenarios.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Clinical Skills Development</h3>
                            <p>Hands-on training with advanced medical equipment and real patient cases.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Healthcare Management</h3>
                            <p>Courses in hospital administration, healthcare policy, and medical ethics.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Research & Innovation</h3>
                            <p>Opportunities to participate in cutting-edge medical research projects.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Continuing Education</h3>
                            <p>Professional development programs for practicing healthcare professionals.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Start Your Healthcare Career</h2>
                    <p>Enroll in our AI-powered healthcare courses today</p>
                    <a href="#contact" className="cta-button">Apply Now</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FutureaceAcademy;
