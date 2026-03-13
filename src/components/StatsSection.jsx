import './StatsSection.css';
import { FaGraduationCap, FaUniversity, FaUsers, FaGlobe } from 'react-icons/fa';

export default function StatsSection() {
    const stats = [
        { icon: <FaUsers />, number: '1 Lakh+', label: 'Registered Students', sub: 'Trusting us for their career' },
        { icon: <FaUniversity />, number: '100+', label: 'Top Universities', sub: 'India & Abroad partners' },
        { icon: <FaGraduationCap />, number: '500+', label: 'Expert Mentors', sub: 'Personalized career guidance' },
        { icon: <FaGlobe />, number: '50+', label: 'Countries Presence', sub: 'Global educational reach' },
    ];

    return (
        <section className="stats-section">
            <div className="container stats-container">
                {stats.map((s, i) => (
                    <div className="stat-card" key={i}>
                        <div className="stat-icon-wrap">{s.icon}</div>
                        <div className="stat-info">
                            <h3 className="stat-num">{s.number}</h3>
                            <p className="stat-name">{s.label}</p>
                            <p className="stat-sub">{s.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
