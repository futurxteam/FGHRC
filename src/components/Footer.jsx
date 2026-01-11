import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2>FGHRC</h2>
                        <p>
                            Futureace Global Healthcare Research Centre - A leading parent company
                            dedicated to revolutionizing healthcare through innovation, technology,
                            and comprehensive services across multiple sectors.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Our Companies</h3>
                        <ul className="footer-links">
                            <li><a href="#futureace-hospital">Futureace Hospital</a></li>
                            <li><a href="#futureace-academy">Futureace Academy</a></li>
                            <li><a href="#medibridge">Medibridge</a></li>
                            <li><a href="#sereniche">Sereniche</a></li>
                            <li><a href="#sage-journey">Sage & Journey</a></li>
                            <li><a href="#futurx">FutuRx</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Info</h3>
                        <ul className="footer-links">
                            <li><a href="mailto:info@fghrc.com">info@fghrc.com</a></li>
                            <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                            <li><a href="#location">Global Locations</a></li>
                            <li><a href="#support">Support Center</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} FGHRC - Futureace Global Healthcare Research Centre. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
