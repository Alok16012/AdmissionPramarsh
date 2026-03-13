import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './PopularCourses.css';
import {
    FaHeartbeat, FaCogs, FaBriefcase, FaLeaf, FaPills,
    FaStethoscope, FaTractor, FaGavel
} from 'react-icons/fa';

const courses = [
    { icon: <FaHeartbeat />, label: 'Medical' },
    { icon: <FaCogs />, label: 'Engineering' },
    { icon: <FaBriefcase />, label: 'Management' },
    { icon: <FaLeaf />, label: 'Ayurveda' },
    { icon: <FaPills />, label: 'Pharmacy' },
    { icon: <FaStethoscope />, label: 'Paramedical' },
    { icon: <FaTractor />, label: 'Agriculture' },
    { icon: <FaGavel />, label: 'Law' },
];

export default function PopularCourses() {
    return (
        <section className="popular-courses">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-heading">
                        Popular Courses in <span>India & Abroad</span>
                    </h2>
                    <p className="section-subheading">Explore our most sought-after programs across disciplines</p>
                </div>

                <div className="courses-grid">
                    {courses.map((c) => (
                        <Link to={`/study-india/${c.label.toLowerCase()}`} key={c.label} className="pc-card">
                            <div className="pc-icon-wrap">
                                {c.icon}
                            </div>
                            <span className="pc-label">{c.label}</span>
                            <div className="pc-action">
                                <span>Explore</span>
                                <FaChevronRight size={10} className="pc-arrow" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="courses-action">
                    <Link to="/study-india/medical" className="btn-primary">View All Courses</Link>
                </div>
            </div>
        </section>
    );
}
