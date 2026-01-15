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
                        <p>Strategic Healthcare Consultancy & Solutions</p>
                    </div>
                </div>
            </div>

            <div className="company-content">
                <Link to="/" className="back-button">← Back to Home</Link>

                <div className="content-section">
                    <h2>About Sage & Journey</h2>
                    <p>
                        Sage & Journey is a premier healthcare consultancy firm dedicated to transforming the medical landscape.
                        We provide strategic guidance, operational optimization, and comprehensive planning services to healthcare
                        organizations, ensuring they deliver the highest standards of care efficiently.
                    </p>
                    <p>
                        With decades of experience in healthcare strategy, we understand the unique challenges of the industry.
                        From hospitals and clinics to research institutes, we deliver solutions that streamline operations,
                        enhance patient experience, and drive sustainable growth.
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
                        <span className="stat-label">Client Success</span>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Our Expertise</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Strategic Planning</h3>
                            <p>Comprehensive roadmaps for hospital development and long-term growth.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Operational Efficiency</h3>
                            <p>Optimizing workflows and resource allocation for maximum efficacy.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Regulatory Compliance</h3>
                            <p>Ensuring adherence to global healthcare standards and regulations.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Change Management</h3>
                            <p>Guiding organizations through structural and cultural transformations.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Financial Advisory</h3>
                            <p>Expert financial planning and investment strategies for healthcare ventures.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Project Advisory</h3>
                            <p>End-to-end guidance ensuring on-time, on-budget project delivery.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Realize Your Healthcare Vision</h2>
                    <p>Partner with us to transform your healthcare organization</p>
                    <a href="#contact" className="cta-button">Request Consultation</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SageJourney;
