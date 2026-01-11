import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.css';

// Import images from public folder
const hospitalImg = '/images/futureace_hospital_1768147113490.png';
const academyImg = '/images/futureace_academy_1768147131521.png';
const medibridgeImg = '/images/medibridge_recruitment_1768147148221.png';
const serenicheImg = '/images/sereniche_psychology_1768147167448.png';
const sageJourneyImg = '/images/sage_journey_construction_1768147185521.png';
const futurxImg = '/images/futurx_healthcare_it_1768147202330.png';

const companies = [
    {
        id: 'futureace-hospital',
        name: 'Futureace Hospital',
        description: 'A premium boutique hospital providing world-class healthcare services with state-of-the-art facilities and compassionate care.',
        tag: 'Healthcare Services',
        image: hospitalImg
    },
    {
        id: 'futureace-academy',
        name: 'Futureace Academy',
        description: 'Pioneering healthcare education with AI-powered learning, offering cutting-edge courses for the next generation of medical professionals.',
        tag: 'Medical Education',
        image: academyImg
    },
    {
        id: 'medibridge',
        name: 'Medibridge',
        description: 'Connecting healthcare talent with opportunities. Specialized recruitment services for medical professionals and healthcare organizations.',
        tag: 'Job Recruitment',
        image: medibridgeImg
    },
    {
        id: 'sereniche',
        name: 'Sereniche',
        description: 'Dedicated to mental wellness and psychological services, providing professional counseling and therapy in a serene environment.',
        tag: 'Psychology & Wellness',
        image: serenicheImg
    },
    {
        id: 'sage-journey',
        name: 'Sage & Journey',
        description: 'Building the future of healthcare infrastructure. Expert construction services specializing in medical facilities and hospitals.',
        tag: 'Construction',
        image: sageJourneyImg
    },
    {
        id: 'futurx',
        name: 'FutuRx',
        description: 'Healthcare IT innovation at its finest. Currently developing Talk2Doc - an AI-powered disease prediction system revolutionizing diagnostics.',
        tag: 'Healthcare IT',
        image: futurxImg
    }
];

const Homepage = () => {
    return (
        <div className="homepage">
            <Header />

            <main className="hero-section" id="home">
                <div className="hero-container">
                    <div className="hero-title fade-in-up">
                        <h1>Futureace Global Healthcare Research Centre</h1>
                        <p>
                            A Health and Research Centre - Leading the future of healthcare through
                            innovation, technology, and comprehensive services across six specialized companies
                        </p>
                    </div>

                    <div className="companies-grid" id="services">
                        {companies.map((company, index) => (
                            <div
                                key={company.id}
                                className="company-card fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="company-image">
                                    <img src={company.image} alt={company.name} />
                                </div>
                                <div className="company-content">
                                    <h2 className="company-name">{company.name}</h2>
                                    <p className="company-description">{company.description}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                                        <span className="company-tag">{company.tag}</span>
                                        <Link to={`/company/${company.id}`} className="btn-view">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Homepage;
