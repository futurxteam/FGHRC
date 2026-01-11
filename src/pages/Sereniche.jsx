import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/companies.css';

const Sereniche = () => {
    return (
        <div className="company-page">
            <Header />

            <div className="company-hero">
                <img
                    src="/images/sereniche_psychology_1768147167448.png"
                    alt="Sereniche"
                    className="company-hero-image"
                />
                <div className="company-hero-overlay">
                    <div className="company-hero-content">
                        <h1>Sereniche</h1>
                        <p>Your Partner in Mental Wellness and Psychological Care</p>
                    </div>
                </div>
            </div>

            <div className="company-content">
                <Link to="/" className="back-button">← Back to Home</Link>

                <div className="content-section">
                    <h2>About Sereniche</h2>
                    <p>
                        Sereniche is dedicated to promoting mental wellness and providing professional psychological
                        services in a serene, supportive environment. We believe that mental health is as important
                        as physical health, and we're committed to making quality psychological care accessible to all.
                    </p>
                    <p>
                        Our team of licensed psychologists, therapists, and counselors offers evidence-based treatments
                        for a wide range of mental health concerns. We create a safe, non-judgmental space where
                        individuals can explore their thoughts, feelings, and behaviors to achieve lasting positive change.
                    </p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">15,000+</span>
                        <span className="stat-label">Clients Served</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">30+</span>
                        <span className="stat-label">Therapists</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Therapy Modalities</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">92%</span>
                        <span className="stat-label">Client Improvement</span>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Our Services</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Individual Therapy</h3>
                            <p>One-on-one counseling for depression, anxiety, trauma, and personal growth.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Couples Counseling</h3>
                            <p>Relationship therapy to strengthen communication and resolve conflicts.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Family Therapy</h3>
                            <p>Support for families navigating challenges and improving dynamics.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Child Psychology</h3>
                            <p>Specialized care for children's emotional and behavioral development.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Stress Management</h3>
                            <p>Techniques and strategies for coping with stress and building resilience.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Mindfulness Programs</h3>
                            <p>Meditation and mindfulness-based interventions for mental wellness.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Begin Your Wellness Journey</h2>
                    <p>Take the first step towards better mental health today</p>
                    <a href="#contact" className="cta-button">Schedule Session</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Sereniche;
