import './Services.css';
import {
    FaComments, FaUniversity, FaFileAlt, FaChartLine, FaUserTie, FaTrophy,
    FaPassport, FaPlane, FaMoneyBillWave, FaInfoCircle, FaHandshake, FaUserFriends
} from 'react-icons/fa';

const row1 = [
    { icon: <FaComments />, label: 'Career Counselling' },
    { icon: <FaUniversity />, label: 'University Shortlist' },
    { icon: <FaFileAlt />, label: 'Application Documentation' },
    { icon: <FaChartLine />, label: 'Live Application Tracking' },
    { icon: <FaUserTie />, label: 'Interview Training' },
    { icon: <FaTrophy />, label: 'Successful Admits' },
];

const row2 = [
    { icon: <FaPassport />, label: 'Visa Documentation' },
    { icon: <FaPlane />, label: 'Travel Package' },
    { icon: <FaMoneyBillWave />, label: 'Currency Exchange' },
    { icon: <FaInfoCircle />, label: 'Pre-departure Orientation' },
    { icon: <FaHandshake />, label: 'Post Arrival Services' },
    { icon: <FaUserFriends />, label: 'Campus Buddy' },
];

export default function Services() {
    return (
        <section className="services-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-heading">
                        Admission Pramarsh <span>Services</span>
                    </h2>
                    <p className="section-subheading">End-to-end support for your study abroad journey</p>
                </div>

                <div className="services-layout">
                    {/* Left Side: Professional Image */}
                    <div className="services-image-col">
                        <div className="services-image-wrapper">
                            <img src="/services-counseling.png" alt="Academic Counseling at Admission Pramarsh" />
                            <div className="floating-badge badge-top">
                                <strong>100%</strong>
                                <span>Visa Success</span>
                            </div>
                            <div className="floating-badge badge-bottom">
                                <strong>24/7</strong>
                                <span>Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Service Lists */}
                    <div className="services-content-col">

                        <div className="services-group">
                            <h3 className="services-group-title blue-title">
                                <span className="group-dot dot-blue" />
                                Pre-Admission Services
                            </h3>
                            <div className="services-list grid-list">
                                {row1.map(s => (
                                    <div key={s.label} className="service-item">
                                        <div className="si-icon-wrap blue-icon">{s.icon}</div>
                                        <span className="si-label">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="services-group mt-spacing">
                            <h3 className="services-group-title red-title">
                                <span className="group-dot dot-red" />
                                Post-Admission Services
                            </h3>
                            <div className="services-list grid-list">
                                {row2.map(s => (
                                    <div key={s.label} className="service-item">
                                        <div className="si-icon-wrap red-icon">{s.icon}</div>
                                        <span className="si-label">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
