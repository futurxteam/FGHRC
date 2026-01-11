import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/companies.css';

const FutuRx = () => {
    return (
        <div className="company-page">
            <Header />

            <div className="company-hero">
                <img
                    src="/images/futurx_healthcare_it_1768147202330.png"
                    alt="FutuRx"
                    className="company-hero-image"
                />
                <div className="company-hero-overlay">
                    <div className="company-hero-content">
                        <h1>FutuRx</h1>
                        <p>Healthcare IT Innovation - Revolutionizing Medical Diagnostics</p>
                    </div>
                </div>
            </div>

            <div className="company-content">
                <Link to="/" className="back-button">← Back to Home</Link>

                <div className="content-section">
                    <h2>About FutuRx</h2>
                    <p>
                        FutuRx is at the forefront of healthcare IT innovation, developing cutting-edge software
                        solutions that transform how medical professionals diagnose and treat diseases. Our flagship
                        product, Talk2Doc, is an AI-powered disease prediction system that's revolutionizing the
                        diagnostic process.
                    </p>
                    <p>
                        By leveraging advanced machine learning algorithms and vast medical databases, we create
                        intelligent systems that assist healthcare providers in making faster, more accurate diagnoses.
                        Our technology bridges the gap between patients and doctors, making quality healthcare more
                        accessible and efficient.
                    </p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">1M+</span>
                        <span className="stat-label">Diagnoses Assisted</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">95%</span>
                        <span className="stat-label">Accuracy Rate</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Healthcare Partners</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Countries</span>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Talk2Doc - Our Flagship Product</h2>
                    <p>
                        Talk2Doc is an innovative AI-powered disease prediction system that enables patients to
                        describe their symptoms in natural language and receive preliminary diagnostic insights.
                        The system uses advanced natural language processing and medical knowledge graphs to
                        analyze symptoms and suggest possible conditions.
                    </p>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>AI Symptom Analysis</h3>
                            <p>Advanced algorithms analyze patient symptoms to identify potential health conditions.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Natural Language Interface</h3>
                            <p>Patients can describe symptoms in everyday language for easy interaction.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Medical Knowledge Base</h3>
                            <p>Powered by comprehensive medical databases and research publications.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Doctor Integration</h3>
                            <p>Seamless connection with healthcare providers for follow-up care.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Predictive Analytics</h3>
                            <p>Early detection of potential health risks based on symptom patterns.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Continuous Learning</h3>
                            <p>AI models that improve accuracy through ongoing training and updates.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Transform Healthcare with AI</h2>
                    <p>Discover how Talk2Doc can enhance your healthcare practice</p>
                    <a href="#contact" className="cta-button">Request Demo</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FutuRx;
