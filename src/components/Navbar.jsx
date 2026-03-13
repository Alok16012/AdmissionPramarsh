import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaChevronDown, FaBars, FaTimes, FaPhone, FaRocket, FaChevronRight } from 'react-icons/fa';
import { GiOwl } from 'react-icons/gi';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const dropdownItemsIndia = [
        { label: 'Medical', path: '/study-india/medical' },
        { label: 'Engineering', path: '/study-india/engineering' },
        { label: 'Management', path: '/study-india/management' },
        { label: 'Ayurveda', path: '/study-india/ayurveda' },
        { label: 'Pharmacy', path: '/study-india/pharmacy' },
        { label: 'Paramedical', path: '/study-india/paramedical' },
        { label: 'Agriculture', path: '/study-india/agriculture' },
        { label: 'Law', path: '/study-india/law' },
    ];

    const dropdownItemsAbroad = [
        { label: 'Medical', path: '/study-abroad/medical' },
        { label: 'Engineering', path: '/study-abroad/engineering' },
        { label: 'Management', path: '/study-abroad/management' },
    ];

    const navItems = [
        {
            label: 'Study India',
            hasDropdown: true,
            dropdownItems: dropdownItemsIndia
        },
        {
            label: 'Study Abroad',
            highlight: true,
            hasDropdown: true,
            dropdownItems: dropdownItemsAbroad
        },
        { label: 'About Us', isInternalLink: true, path: '/about' },
        { label: 'Contact Us', isInternalLink: true, path: '/contact' },
    ];

    return (
        <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-left">
                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <Link to="/" className="navbar-logo">
                        <img src="/logo.png" alt="Admission Pramarsh" />
                    </Link>
                </div>

                <nav className={`navbar-center ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.label} className={`nav-item ${item.highlight ? 'highlight' : ''} ${item.hasDropdown ? 'has-dropdown' : ''}`}>
                                {item.isInternalLink ? (
                                    <Link to={item.path} className="nav-link">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <>
                                        <a href="#" className="nav-link">
                                            {item.label}
                                            {item.hasDropdown && <FaChevronDown size={10} />}
                                        </a>
                                        {item.hasDropdown && (
                                            <ul className="dropdown-menu">
                                                {item.dropdownItems.map((subItem, idx) => (
                                                    <li key={idx} className="dropdown-sub-item">
                                                        <div className="dropdown-item-content">
                                                            <Link to={subItem.path}>{subItem.label}</Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="navbar-right">
                    <div className="navbar-contact">
                        <a href="tel:8809888333" className="nav-contact-link">
                            <FaPhoneAlt />
                            <span>+91 8809888333</span>
                        </a>
                    </div>
                    <a href="#" className="compare-btn">
                        <span className="compare-icon">⚡</span>
                        Compare
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
