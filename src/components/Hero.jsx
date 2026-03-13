import { useState } from 'react';
import './Hero.css';
import { FaSearch, FaChevronRight } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="trust-badge">
                        <span className="star-icon">★</span>
                        India's Most Trusted Admission Consultancy
                    </div>
                    <h1 className="hero-title">
                        Empowering Your Academic Dreams <br />
                        <span>Expert Guidance for Your Future</span>
                    </h1>
                    <p className="hero-subtitle">
                        Get personalized counseling for MBBS, Engineering, Management, and more.
                        We help you find the right university in India and Abroad with 100% transparency.
                    </p>

                    <div className="hero-search-box">
                        <div className="search-input-wrap">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="Search for University, Course or Country..." />
                        </div>
                        <button className="search-btn">
                            Get Free Counselling <FaChevronRight size={12} />
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10k+</span>
                            <span className="stat-label">Students Guided</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Global Partners</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">7+ Years</span>
                            <span className="stat-label">of Excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
