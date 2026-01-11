import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/companies.css';

const FutureaceHospital = () => {
    return (
        <div className="company-page">
            <Header />

            <div className="company-hero">
                <img
                    src="/images/futureace_hospital_1768147113490.png"
                    alt="Futureace Hospital"
                    className="company-hero-image"
                />
                <div className="company-hero-overlay">
                    <div className="company-hero-content">
                        <h1>Futureace Hospital</h1>
                        <p>A Premium Boutique Hospital Delivering World-Class Healthcare</p>
                    </div>
                </div>
            </div>

            <div className="company-content">
                <Link to="/" className="back-button">← Back to Home</Link>

                <div className="content-section">
                    <h2>About Futureace Hospital</h2>
                    <p>
                        Futureace Hospital is a state-of-the-art boutique healthcare facility dedicated to providing
                        exceptional medical care with a personalized touch. Our hospital combines cutting-edge medical
                        technology with compassionate care to ensure the best possible outcomes for our patients.
                    </p>
                    <p>
                        With a team of highly qualified medical professionals and modern infrastructure, we offer
                        comprehensive healthcare services across multiple specialties. Our patient-centric approach
                        ensures that every individual receives tailored treatment plans and continuous support throughout
                        their healthcare journey.
                    </p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Beds</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">200+</span>
                        <span className="stat-label">Doctors</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Specialties</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Emergency Care</span>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Our Services</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Emergency Care</h3>
                            <p>24/7 emergency services with rapid response teams and advanced life support systems.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Surgical Excellence</h3>
                            <p>State-of-the-art operation theaters with minimally invasive surgical techniques.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Diagnostic Services</h3>
                            <p>Advanced imaging and laboratory services for accurate and timely diagnosis.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Specialized Care</h3>
                            <p>Expert care across cardiology, neurology, orthopedics, and more.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Maternity Services</h3>
                            <p>Comprehensive prenatal, delivery, and postnatal care for mothers and babies.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Rehabilitation</h3>
                            <p>Physical therapy and rehabilitation programs for complete recovery.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Experience Premium Healthcare</h2>
                    <p>Schedule a consultation with our expert medical team today</p>
                    <a href="#contact" className="cta-button">Book Appointment</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FutureaceHospital;
