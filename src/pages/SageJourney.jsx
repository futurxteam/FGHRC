import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/companies.css';

const SageJourney = () => {
    return (
        <div className="company-page">
            <Header />

            <div className="company-hero">
                <img
                    src="/images/sage_journey_construction_1768147185521.png"
                    alt="Sage & Journey"
                    className="company-hero-image"
                />
                <div className="company-hero-overlay">
                    <div className="company-hero-content">
                        <h1>Sage & Journey</h1>
                        <p>Building the Future of Healthcare Infrastructure</p>
                    </div>
                </div>
            </div>

            <div className="company-content">
                <Link to="/" className="back-button">← Back to Home</Link>

                <div className="content-section">
                    <h2>About Sage & Journey</h2>
                    <p>
                        Sage & Journey is a premier construction company specializing in healthcare infrastructure.
                        We design and build state-of-the-art medical facilities that combine functionality, safety,
                        and aesthetic appeal to create healing environments for patients and efficient workspaces
                        for healthcare professionals.
                    </p>
                    <p>
                        With decades of experience in healthcare construction, we understand the unique requirements
                        of medical facilities. From hospitals and clinics to research laboratories and rehabilitation
                        centers, we deliver projects that meet the highest standards of quality, compliance, and innovation.
                    </p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">200+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Healthcare Facilities</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">25+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Safety Record</span>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Our Expertise</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Hospital Construction</h3>
                            <p>Complete hospital buildings with advanced medical infrastructure and systems.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Medical Centers</h3>
                            <p>Outpatient clinics and specialized medical treatment facilities.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Research Laboratories</h3>
                            <p>State-of-the-art labs for medical research and pharmaceutical development.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Renovation & Expansion</h3>
                            <p>Modernization of existing healthcare facilities with minimal disruption.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Green Building</h3>
                            <p>Sustainable construction practices for environmentally friendly facilities.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Project Management</h3>
                            <p>End-to-end construction management ensuring on-time, on-budget delivery.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Build Your Healthcare Vision</h2>
                    <p>Partner with us for your next healthcare construction project</p>
                    <a href="#contact" className="cta-button">Request Consultation</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SageJourney;
