import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import '../styles/home.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (!isHome) {
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    FGHRC
                </Link>
                <nav className="nav">
                    <Link
                        to="/"
                        className="nav-link"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Home
                    </Link>

                    <div className="dropdown">
                        <span className="nav-link" style={{ cursor: 'pointer' }}>Companies ▾</span>
                        <div className="dropdown-content">
                            <Link to="/company/futureace-hospital" className="dropdown-item">Futureace Hospital</Link>
                            <Link to="/company/futureace-academy" className="dropdown-item">Futureace Academy</Link>
                            <Link to="/company/medibridge" className="dropdown-item">Medibridge</Link>
                            <Link to="/company/sereniche" className="dropdown-item">Sereniche</Link>
                            <Link to="/company/sage-journey" className="dropdown-item">Sage & Journey</Link>
                            <Link to="/company/futurx" className="dropdown-item">FutuRx</Link>
                        </div>
                    </div>

                    <a
                        href="#services"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('services');
                        }}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('contact');
                        }}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
