import './ArticlesWebinars.css';
import { FaCalendarAlt, FaArrowRight, FaVideo } from 'react-icons/fa';

const articles = [
    {
        title: 'Top MBBS Colleges in Russia 2024: Complete Guide',
        date: 'Feb 12, 2026',
        img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=300&q=70',
        tag: 'MBBS Abroad',
    },
    {
        title: 'NEET 2026: Important Dates, Syllabus & Preparation Tips',
        date: 'Feb 10, 2026',
        img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&q=70',
        tag: 'Exams',
    },
    {
        title: 'Best Engineering Colleges in India 2026 Rankings',
        date: 'Feb 08, 2026',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=70',
        tag: 'Engineering',
    },
    {
        title: 'MBBS in Bangladesh: Fees, Colleges & Eligibility 2026',
        date: 'Feb 05, 2026',
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=70',
        tag: 'Study Abroad',
    },
];

export default function ArticlesWebinars() {
    return (
        <section className="articles-webinars" id="articles">
            <div className="container">
                <div className="aw-grid">
                    {/* Articles */}
                    <div className="aw-articles">
                        <div className="aw-section-head">
                            <h2 className="section-heading">Latest <span>Articles</span></h2>
                        </div>
                        <div className="articles-list">
                            {articles.map(a => (
                                <a href="#" key={a.title} className="article-card">
                                    <div className="article-img-wrap">
                                        <img src={a.img} alt={a.title} />
                                    </div>
                                    <div className="article-body">
                                        <span className="article-tag">{a.tag}</span>
                                        <h4 className="article-title">{a.title}</h4>
                                        <p className="article-date">
                                            <FaCalendarAlt size={11} /> {a.date}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <a href="#" className="browse-link">Browse All Articles <FaArrowRight size={12} /></a>
                    </div>

                    {/* Webinars */}
                    <div className="aw-webinars">
                        <div className="aw-section-head">
                            <h2 className="section-heading">Upcoming <span>Webinars</span></h2>
                        </div>
                        <div className="webinar-featured">
                            <div className="webinar-img-wrap">
                                <img
                                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&q=80"
                                    alt="Webinar"
                                />
                                <div className="webinar-live-badge">
                                    <FaVideo size={10} /> LIVE
                                </div>
                            </div>
                            <div className="webinar-body">
                                <span className="webinar-date-badge">
                                    <FaCalendarAlt size={11} /> March 01, 2026 | 6:00 PM IST
                                </span>
                                <h3 className="webinar-title">
                                    MBBS Abroad 2026: Everything You Need to Know About Admissions
                                </h3>
                                <p className="webinar-desc">
                                    Join our expert counselors as they walk you through the complete process of getting admission in top medical colleges abroad.
                                </p>
                                <a href="#" className="btn-red webinar-register-btn">REGISTER NOW</a>
                            </div>
                        </div>

                        <div className="webinar-upcoming-list">
                            {[
                                { title: 'Engineering Admissions in India 2026', date: 'Mar 08, 2026', time: '5 PM IST' },
                                { title: 'Scholarship Opportunities Abroad – Expert Talk', date: 'Mar 15, 2026', time: '6 PM IST' },
                            ].map(w => (
                                <div key={w.title} className="webinar-mini-card">
                                    <div className="wmc-icon"><FaVideo /></div>
                                    <div>
                                        <p className="wmc-title">{w.title}</p>
                                        <p className="wmc-date">{w.date} · {w.time}</p>
                                    </div>
                                    <a href="#" className="wmc-btn">Register</a>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="browse-link">Browse All Webinars <FaArrowRight size={12} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
