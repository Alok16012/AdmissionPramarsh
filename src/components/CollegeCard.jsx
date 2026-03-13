import { Link } from 'react-router-dom';
import './CollegeCard.css';
import { FaStar, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const abroadColleges = [
    {
        name: 'Tairunnessa Memorial Medical College',
        location: 'Dhaka, Bangladesh',
        rating: 4.2,
        approvedBy: 'MCI, WHO, NMC',
        streams: 'Medical',
        courses: 3,
        fees: '$4,200/yr',
        img: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&q=70',
    },
    {
        name: 'Dhaka National Medical College',
        location: 'Dhaka, Bangladesh',
        rating: 4.0,
        approvedBy: 'WHO, NMC, BMDC',
        streams: 'Medical',
        courses: 5,
        fees: '$4,500/yr',
        img: 'https://images.unsplash.com/photo-1537481861679-79b6ef6a8d42?w=400&q=70',
    },
    {
        name: 'Kathmandu University School of Medical Sciences',
        location: 'Dhulikhel, Nepal',
        rating: 4.4,
        approvedBy: 'WHO, NMC',
        streams: 'Medical',
        courses: 4,
        fees: '$6,000/yr',
        img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=70',
    },
    {
        name: 'Osh State University',
        location: 'Osh, Kyrgyzstan',
        rating: 3.9,
        approvedBy: 'WHO, MCI, NMC',
        streams: 'Medical',
        courses: 3,
        fees: '$3,000/yr',
        img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&q=70',
    },
    {
        name: 'Kazakh National Medical University',
        location: 'Almaty, Kazakhstan',
        rating: 4.1,
        approvedBy: 'WHO, NMC',
        streams: 'Medical',
        courses: 6,
        fees: '$4,500/yr',
        img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=70',
    },
    {
        name: 'Tashkent Medical Academy',
        location: 'Tashkent, Uzbekistan',
        rating: 4.0,
        approvedBy: 'WHO, NMC',
        streams: 'Medical',
        courses: 4,
        fees: '$3,800/yr',
        img: 'https://images.unsplash.com/photo-1581362072978-14998d01fdaa?w=400&q=70',
    },
    {
        name: 'Tbilisi State Medical University',
        location: 'Tbilisi, Georgia',
        rating: 4.3,
        approvedBy: 'WHO, NMC',
        streams: 'Medical',
        courses: 5,
        fees: '$5,000/yr',
        img: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&q=70',
    },
    {
        name: 'Northern State Medical University',
        location: 'Arkhangelsk, Russia',
        rating: 4.2,
        approvedBy: 'WHO, NMC',
        streams: 'Medical',
        courses: 6,
        fees: '$4,000/yr',
        img: 'https://images.unsplash.com/photo-1537481861679-79b6ef6a8d42?w=400&q=70',
    }
];

const indiaColleges = [
    {
        name: 'Chitkara University',
        location: 'Rajpura, Punjab',
        rating: 4.4,
        approvedBy: 'AICTE, UGC, NAAC A+',
        streams: 'Engineering, Management',
        courses: 20,
        fees: '₹1.2L/yr',
        img: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=400&q=70',
    },
    {
        name: 'Global Group Of Institutes',
        location: 'Amritsar, Punjab',
        rating: 4.0,
        approvedBy: 'AICTE, PTU, UGC',
        streams: 'Engineering, MBA, Law',
        courses: 12,
        fees: '₹80K/yr',
        img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=70',
    },
    {
        name: 'SRM Institute of Science & Technology',
        location: 'Ghaziabad, UP',
        rating: 4.2,
        approvedBy: 'UGC, AICTE, NAAC A',
        streams: 'Engineering, Medical',
        courses: 25,
        fees: '₹1.5L/yr',
        img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&q=70',
    },
    {
        name: 'Baba Farid Group Of Institutions',
        location: 'Faridkot, Punjab',
        rating: 4.1,
        approvedBy: 'PCI, NMC, UGC',
        streams: 'Medical, Pharmacy',
        courses: 8,
        fees: '₹90K/yr',
        img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=70',
    },
    {
        name: 'Narayan Medical College',
        location: 'Sasaram, Bihar',
        rating: 3.8,
        approvedBy: 'NMC, MCI',
        streams: 'Medical, Paramedical',
        courses: 4,
        fees: '₹1.1L/yr',
        img: 'https://images.unsplash.com/photo-1581362072978-14998d01fdaa?w=400&q=70',
    },
    {
        name: 'Vivekananda Global University',
        location: 'Jaipur, Rajasthan',
        rating: 4.3,
        approvedBy: 'UGC, AICTE, NAAC A',
        streams: 'Engineering, Management',
        courses: 15,
        fees: '₹95K/yr',
        img: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=400&q=70',
    },
];

export function ColCard({ c, type = 'study-india' }) {
    if (!c) return null;

    // Map stream to category URL
    const primaryStream = c.streams.split(',')[0].trim().toLowerCase();
    const targetPath = `/${type}/${primaryStream}`;

    return (
        <Link to={targetPath} className="col-university-card">
            <div className="card-top image-top">
                <img src={c.img} alt={c.name} className="university-bg-image" />
                <div className="course-badge">
                    {c.courses}+ Courses
                </div>
            </div>
            <div className="card-bottom">
                <div className="university-details">
                    <h3 className="university-name">{c.name}</h3>
                    <p className="university-location">
                        <FaMapMarkerAlt /> {c.location}
                    </p>
                </div>
                <div className="card-action">
                    <span>View Details</span>
                    <FaChevronRight size={10} className="card-arrow" />
                </div>
            </div>
        </Link>
    );
}

const CollegeCard = ({ type, collegeIndex = 0 }) => {
    const routeType = type === 'india' ? 'study-india' : 'study-abroad';
    const colleges = type === 'india' ? indiaColleges : abroadColleges;
    const college = colleges[collegeIndex] || colleges[0];
    return <ColCard c={college} type={routeType} />;
};

export default CollegeCard;

export function FeaturedCollegesAbroad() {
    return (
        <section className="featured-section bg-light">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-heading">
                        Featured Universities <span>Abroad</span>
                    </h2>
                    <p className="section-subheading">Leading international medical & professional institutions partnered with us.</p>
                </div>
                <div className="university-grid">
                    {abroadColleges.slice(0, 4).map(c => <ColCard key={c.name} c={c} type="study-abroad" />)}
                </div>
            </div>
        </section>
    );
}

export function FeaturedCollegesIndia() {
    return (
        <section className="featured-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-heading">
                        Top Universities in <span>India</span>
                    </h2>
                    <p className="section-subheading">Handpicked institutions offering world-class education and placements.</p>
                </div>
                <div className="university-grid">
                    {indiaColleges.slice(0, 4).map(c => <ColCard key={c.name} c={c} type="study-india" />)}
                </div>
            </div>
        </section>
    );
}
