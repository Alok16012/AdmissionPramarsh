import React from 'react';
import Testimonials from '../components/Testimonials';
import { FaGlobe, FaFileAlt, FaUserGraduate, FaMoneyBillWave, FaProjectDiagram, FaCheckCircle, FaUserTie, FaHistory, FaCertificate, FaMapMarkerAlt, FaHandsHelping, FaStar, FaChevronRight } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* 1. Page Hero Banner */}
            <section className="about-hero">
                <div className="container">
                    <div className="breadcrumb">Home {'>'} About Us</div>
                    <h1 className="hero-title">About Us</h1>
                    <p className="hero-subtitle">Best Education Consultancy in Patna</p>
                </div>
            </section>

            {/* 2. Who We Are — Split Section */}
            <section className="who-we-are section-container">
                <div className="container split-grid">
                    <div className="text-content">
                        <h4 className="red-tag">Admission Pramarsh</h4>
                        <h2 className="section-title">Who We Are</h2>
                        <p>
                            Admission Pramarsh Educational Consultant is one of Bihar's most trusted educational consultancies, established in 2017.
                            Located in Patna, Bihar, we provide expert career counselling and admission
                            guidance for students aspiring to study MBBS, B.Tech, Management and other courses in India and abroad.
                        </p>
                        <p>
                            In 7+ years, we have successfully guided 10,000+ students and helped them secure admissions in top universities worldwide.
                            With a Google rating of 4.9/5 from 159+ satisfied students, Admission Pramarsh is the most trusted name in Patna for educational consultancy.
                            Our team of highly experienced counsellors works dedicatedly for every student's bright future.
                        </p>
                    </div>
                    <div className="image-content">
                        <div className="image-wrapper">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Students Success" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Stats Counter Row */}
            <section className="stats-counter-row">
                <div className="container">
                    <div className="stats-row-grid">
                        <div className="stat-box">
                            <div className="stat-number">30+</div>
                            <div className="stat-label">Total Courses</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">200+</div>
                            <div className="stat-label">Universities</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">5000+</div>
                            <div className="stat-label">Students Served</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">10000+</div>
                            <div className="stat-label">Students Counselled</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Mission */}
            <section className="our-mission section-container bg-light">
                <div className="container">
                    <h2 className="section-heading text-center">Our <span>Mission</span></h2>
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="mission-icon"><FaGlobe /></div>
                            <h3>Global Assistance</h3>
                            <p>To provide comprehensive assistance for Admission to foreign countries</p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon"><FaFileAlt /></div>
                            <h3>Simple Documentation</h3>
                            <p>To make everything simple from scholarship to visa processing for Indian students</p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon"><FaUserGraduate /></div>
                            <h3>Student Empowerment</h3>
                            <p>To prepare the applicant to help him shine confidently</p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon"><FaMoneyBillWave /></div>
                            <h3>Affordable Solutions</h3>
                            <p>To avail cost-effective overseas education solutions</p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon"><FaProjectDiagram /></div>
                            <h3>Universal Connections</h3>
                            <p>To facilitate universal connections to Indian aspirants</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. What We Offer — Countries We Cover */}
            <section className="countries-section section-container">
                <div className="container">
                    <h2 className="section-heading text-center">Countries We Represent</h2>
                    <p className="section-subheading text-center">Our executives represent top-rated private and government medical universities in various countries</p>
                    <div className="countries-grid">
                        {[
                            { name: 'Bangladesh', flag: '🇧🇩' },
                            { name: 'Nepal', flag: '🇳🇵' },
                            { name: 'Ukraine', flag: '🇺🇦' },
                            { name: 'Russia', flag: '🇷🇺' },
                            { name: 'USA', flag: '🇺🇸' },
                            { name: 'China', flag: '🇨🇳' },
                            { name: 'Kazakhstan', flag: '🇰🇿' },
                            { name: 'Philippines', flag: '🇵🇭' }
                        ].map(country => (
                            <div key={country.name} className="country-card">
                                <div className="flag-circle">{country.flag}</div>
                                <h3>MBBS in {country.name}</h3>
                                <a href="#" className="learn-more">Learn More <FaChevronRight className="icon-sm" /></a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Choose */}
            <section className="why-choose section-container bg-light">
                <div className="container">
                    <h2 className="section-heading text-center">Why Choose Admission Pramarsh</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon"><FaUserTie /></div>
                            <h3>Expert Counsellors</h3>
                            <p>Highly experienced team guiding students at every step</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><FaHistory /></div>
                            <h3>7+ Years Experience</h3>
                            <p>Established in 2017, trusted by thousands of families</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><FaCertificate /></div>
                            <h3>ISO 9001:2015 Certified</h3>
                            <p>Quality assurance in all our processes</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><FaMapMarkerAlt /></div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginBottom: '10px' }}>
                                <FaStar color="var(--gold)" />
                                <h3 style={{ marginBottom: 0 }}>4.9/5 Rating</h3>
                            </div>
                            <p>159+ verified Google reviews from satisfied students</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><FaHandsHelping /></div>
                            <h3>End-to-End Support</h3>
                            <p>From admission to visa to post-arrival assistance</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon"><FaStar /></div>
                            <h3>Transparent Process</h3>
                            <p>Fair, transparent service with student-first approach</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Team CTA Banner */}
            <section className="team-cta">
                <div className="container text-center">
                    <h2>Team Admission Pramarsh works with applicants like a family</h2>
                    <p>Years of experience, a skilled team, and access to resources have enabled us to assist thousands of Indian students</p>
                    <button className="btn btn-outline-white">TALK TO OUR COUNSELOR</button>
                </div>
            </section>

            {/* 8. Student Testimonials */}
            <Testimonials />
        </div>
    );
};

export default About;
