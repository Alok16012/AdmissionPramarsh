import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "How can I apply for MBBS abroad through Admission Pramarsh?",
            a: "You can apply by filling out our enquiry form, visiting any of our branches, or calling our helpline. Our counsellors will guide you through university selection, documentation, and the application process."
        },
        {
            q: "Is Admission Pramarsh a government recognized consultancy?",
            a: "Yes, Admission Pramarsh Educational Consultant is an ISO 9001:2015 certified company registered under the Indian Company Act, providing trusted educational consultancy for over 7+ years."
        },
        {
            q: "What countries do you offer MBBS admissions in?",
            a: "We represent top medical universities in India, Bangladesh, Nepal, Russia, Uzbekistan, Kazakhstan, Philippines, Egypt, and several other countries."
        },
        {
            q: "What documents are required for MBBS abroad admission?",
            a: "Typically, you need your 10th and 12th marksheets, NEET qualification score, valid passport, and recent photographs. Specific requirements may vary by country."
        },
        {
            q: "Do you provide visa assistance?",
            a: "Absolutely. We provide end-to-end support including visa documentation, processing, and interview preparation to ensure a smooth journey for our students."
        },
        {
            q: "How long does the admission process take?",
            a: "The timeline varies by country and university, but generally, it takes 4 to 8 weeks from application to visa approval. We recommend starting early to avoid last-minute rush."
        }
    ];

    const branches = [
        { city: "Patna, Bihar", status: "Head Office", address: "Patna, Bihar, India" },
        { city: "Guwahati, Assam", status: "Regional Center", address: "Regional Center Guwahati" },
        { city: "Hyderabad, Telangana", status: "Regional Center", address: "Regional Center Hyderabad" },
        { city: "Anantapur, Andhra Pradesh", status: "Regional Center", address: "Regional Center Anantapur" },
        { city: "Tirupati, Andhra Pradesh", status: "Regional Center", address: "Regional Center Tirupati" },
        { city: "Jammu & Kashmir", status: "Regional Center", address: "Regional Center J&K" }
    ];

    return (
        <div className="contact-page">
            {/* 1. Page Hero Banner */}
            <section className="contact-hero">
                <div className="container">
                    <div className="breadcrumb">Home {'>'} Contact Us</div>
                    <h1 className="hero-title">Contact Us</h1>
                    <p className="hero-subtitle">Any Question or remarks? Just write us a message!</p>
                    <div className="hero-line"></div>
                    <p className="hero-tagline">Bihar's No. 1 Education Consultancy</p>
                </div>
            </section>

            {/* 2. Main Contact Section — 2 Column Layout */}
            <section className="main-contact section-container">
                <div className="container contact-grid">
                    {/* LEFT COLUMN: Form */}
                    <div className="contact-form-card">
                        <h3>Fill up the form and our Team will get back to you within 24 hours</h3>
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>
                            <div className="form-group">
                                <select required defaultValue="">
                                    <option value="" disabled>Course Interested In</option>
                                    <option value="MBBS in India">MBBS in India</option>
                                    <option value="MBBS in Bangladesh">MBBS in Bangladesh</option>
                                    <option value="MBBS in Nepal">MBBS in Nepal</option>
                                    <option value="MBBS in Russia">MBBS in Russia</option>
                                    <option value="MBBS in Ukraine">MBBS in Ukraine</option>
                                    <option value="MBBS in Kazakhstan">MBBS in Kazakhstan</option>
                                    <option value="MBBS in China">MBBS in China</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Management">Management</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select required defaultValue="">
                                    <option value="" disabled>Preferred Country</option>
                                    <option value="India">India</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="China">China</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn-submit">SUBMIT YOUR ENQUIRY</button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Contact Details */}
                    <div className="contact-details-card">
                        <div className="details-item">
                            <div className="item-icon"><FaMapMarkerAlt /></div>
                            <div className="item-text">
                                <span className="item-label">Head Office</span>
                                <p>Admission Pramarsh Educational Consultant<br />
                                    Patna, Bihar, India</p>
                            </div>
                        </div>

                        <div className="details-item">
                            <div className="item-icon"><FaPhoneAlt /></div>
                            <div className="item-text">
                                <span className="item-label">Helpline</span>
                                <p>+91 8809888333</p>
                            </div>
                        </div>

                        <div className="details-item">
                            <div className="item-icon"><FaWhatsapp /></div>
                            <div className="item-text">
                                <span className="item-label">Call/WhatsApp</span>
                                <p>+91 8809888333</p>
                            </div>
                        </div>

                        <div className="details-item">
                            <div className="item-icon"><FaEnvelope /></div>
                            <div className="item-text">
                                <span className="item-label">Email</span>
                                <p>info@admissionpramarsh.com</p>
                            </div>
                        </div>

                        <div className="details-item">
                            <div className="item-icon"><FaClock /></div>
                            <div className="item-text">
                                <span className="item-label">Working Hours</span>
                                <p>Monday – Saturday: 9:00 AM – 6:00 PM<br />
                                    Sunday: By Appointment</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-icon"><FaFacebook /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaYoutube /></a>
                            <a href="#" className="social-icon"><FaTwitter /></a>
                            <a href="#" className="social-icon"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Branch Offices Section */}
            <section className="branch-offices section-container bg-light">
                <div className="container">
                    <h2 className="section-heading text-center">Our <span>Branches</span> Across India</h2>
                    <div className="branches-grid">
                        {branches.map((branch, idx) => (
                            <div key={idx} className="branch-card">
                                <div className="branch-pin"><FaMapMarkerAlt /></div>
                                <div className="branch-info">
                                    <h4>{branch.city} — <span>{branch.status}</span></h4>
                                    <p>{branch.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Google Map Embed Section */}
            <section className="map-section">
                <div className="container">
                    <h2 className="section-heading text-center">Find Us On Map</h2>
                    <div className="map-wrapper">
                        <iframe
                            src="https://maps.google.com/maps?q=Admission+Pramarsh+Patna+Bihar&output=embed"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>

            {/* 5. Quick Help CTA Row */}
            <section className="quick-help section-container">
                <div className="container">
                    <h2 className="section-heading text-center">Get Help Instantly</h2>
                    <div className="help-grid">
                        <div className="help-card">
                            <div className="help-icon red"><FaPhoneAlt /></div>
                            <h3>Call Us Now</h3>
                            <p>+91 8809888333</p>
                            <a href="tel:8809888333" className="btn-help btn-red-bg text-center text-decoration-none">Call Now</a>
                        </div>
                        <div className="help-card">
                            <div className="help-icon green"><FaWhatsapp /></div>
                            <h3>WhatsApp Us</h3>
                            <p>+91 8809888333</p>
                            <a href="https://wa.me/918809888333" target="_blank" rel="noopener noreferrer" className="btn-help btn-green-bg text-center text-decoration-none">Chat Now</a>
                        </div>
                        <div className="help-card">
                            <div className="help-icon blue"><FaEnvelope /></div>
                            <h3>Email Us</h3>
                            <p>info@admissionpramarsh.com</p>
                            <a href="mailto:info@admissionpramarsh.com" className="btn-help btn-blue-bg text-center text-decoration-none">Send Email</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ Section */}
            <section className="faq-section section-container bg-light">
                <div className="container">
                    <h2 className="section-heading text-center">Frequently Asked <span>Questions</span></h2>
                    <div className="faq-accordion">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
                                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                                    <h4>{faq.q}</h4>
                                    <div className="faq-toggle">
                                        {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
