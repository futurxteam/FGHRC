import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/companies.css';

const Medibridge = () => {
    return (
        <div className="company-page">
            <Header />

            <div className="company-hero">
                <img
                    src="/images/medibridge_recruitment_1768147148221.png"
                    alt="Medibridge"
                    className="company-hero-image"
                />
                <div className="company-hero-overlay">
                    <div className="company-hero-content">
                        <h1>Medibridge</h1>
                        <p>Connecting Healthcare Talent with Opportunities</p>
                    </div>
                </div>
            </div>

            <div className="company-content">
                <Link to="/" className="back-button">← Back to Home</Link>

                <div className="content-section">
                    <h2>About Medibridge</h2>
                    <p>
                        Medibridge is a specialized healthcare recruitment company dedicated to connecting talented
                        medical professionals with leading healthcare organizations. We understand the unique challenges
                        of healthcare staffing and provide tailored solutions for both employers and job seekers.
                    </p>
                    <p>
                        Our extensive network spans across hospitals, clinics, research institutions, and healthcare
                        companies. We leverage advanced matching algorithms and personalized service to ensure the
                        perfect fit between candidates and positions, contributing to better healthcare outcomes.
                    </p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">10,000+</span>
                        <span className="stat-label">Placements</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Partner Organizations</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Specializations</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">98%</span>
                        <span className="stat-label">Satisfaction Rate</span>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Our Services</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Physician Recruitment</h3>
                            <p>Specialized placement services for doctors across all medical specialties.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Nursing Staffing</h3>
                            <p>Connecting qualified nurses with hospitals and healthcare facilities.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Allied Health Professionals</h3>
                            <p>Recruitment for therapists, technicians, and support staff.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Healthcare Administration</h3>
                            <p>Executive search and placement for healthcare management positions.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Temporary Staffing</h3>
                            <p>Flexible staffing solutions for short-term and locum positions.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Career Counseling</h3>
                            <p>Professional guidance and career development support for healthcare workers.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Find Your Next Opportunity</h2>
                    <p>Explore healthcare career opportunities or find the perfect candidate</p>
                    <a href="#contact" className="cta-button">Get Started</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Medibridge;
