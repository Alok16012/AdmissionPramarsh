import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <img src="/logo.png" alt="Admission Pramarsh" className="footer-logo" />
                    <p className="footer-desc">
                        Admission Pramarsh is India's most trusted education consultancy, helping students find their perfect university with AI-powered guidance.
                    </p>
                    <div className="footer-social">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>

                <div className="footer-links-grid">
                    <div className="footer-col">
                        <h4>PG Courses</h4>
                        <ul>
                            <li><a href="#">Online MBA</a></li>
                            <li><a href="#">Online MCA</a></li>
                            <li><a href="#">Online M.Com</a></li>
                            <li><a href="#">Online MA</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>UG Courses</h4>
                        <ul>
                            <li><a href="#">Online BBA</a></li>
                            <li><a href="#">Online BCA</a></li>
                            <li><a href="#">Online B.Com</a></li>
                            <li><a href="#">Online BA</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Exams</h4>
                        <ul>
                            <li><a href="#">NEET PG</a></li>
                            <li><a href="#">GATE</a></li>
                            <li><a href="#">CAT</a></li>
                            <li><a href="#">NEET UG</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact-list">
                            <li><FaPhoneAlt /> +91 8809888333</li>
                            <li><FaEnvelope /> info@admissionpramarsh.com</li>
                            <li><FaMapMarkerAlt /> Patna, Bihar, India</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>&copy; {new Date().getFullYear()} Admission Pramarsh. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
