import { useState } from 'react';
import './Testimonials.css';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Rohan Sharma',
        course: 'MBBS in Bangladesh',
        quote: 'Admission Pramarsh helped me secure admission in my dream college effortlessly. The counselors were extremely supportive throughout and guided me at every step of the process.',
        rating: 5,
        emoji: '👩‍🎓',
        type: 'blue',
    },
    {
        name: 'Pankaj Kumar',
        course: 'MBBS in Russia',
        quote: 'I am now studying MBBS in Russia, thanks to Admission Pramarsh! Their team handled everything from documentation to visa with great expertise and professionalism.',
        rating: 5,
        emoji: '👨‍⚕️',
        type: 'red',
    },
    {
        name: 'Aayushi Agrawal',
        college: 'Manipal College of Medical Science',
        quote: "Best education consultancy! The team provided honest advice and helped me get into a top medical college. I'm grateful for their tireless support and guidance.",
        rating: 5,
        emoji: '👩‍⚕️',
        type: 'blue',
    },
    {
        name: 'Rahul Singh',
        course: 'B.Tech CS, Pune',
        quote: 'Admission Pramarsh guided me towards the right engineering college that fits my budget and career goals. Couldn\'t have done it without their expert help and detailed insights.',
        rating: 4,
        emoji: '👨‍💻',
        type: 'blue',
    },
    {
        name: 'Priya Sharma',
        course: 'MBBS in Egypt',
        quote: 'Studying MBBS in Egypt was my dream and Admission Pramarsh made it possible within my budget. Their end-to-end support is truly exceptional and highly professional.',
        rating: 5,
        emoji: '👩‍🔬',
        type: 'red',
    },
];

export default function Testimonials() {
    const [idx, setIdx] = useState(0);
    const visible = 3;

    const prev = () => setIdx(i => Math.max(0, i - 1));
    const next = () => setIdx(i => Math.min(testimonials.length - visible, i + 1));

    const shown = testimonials.slice(idx, idx + visible);

    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials-head">
                    <h2 className="section-heading">What Our <span>Students Say</span></h2>
                    <p className="section-subheading">Real stories from students who found their path with Admission Pramarsh</p>
                    <div className="testimonial-nav">
                        <button className="t-arrow" onClick={prev} disabled={idx === 0}><FaChevronLeft /></button>
                        <button className="t-arrow" onClick={next} disabled={idx >= testimonials.length - visible}><FaChevronRight /></button>
                    </div>
                </div>

                <div className="testimonials-grid">
                    {shown.map((t, i) => (
                        <div
                            key={t.name}
                            className={`testimonial-card ${i === 1 ? 'testimonial-card--center' : ''}`}
                        >
                            <FaQuoteLeft className="t-quote-icon" />
                            <p className="t-quote">"{t.quote}"</p>
                            <div className="t-stars">
                                {Array.from({ length: 5 }).map((_, si) => (
                                    <FaStar key={si} className={si < t.rating ? 't-star-filled' : 't-star-empty'} />
                                ))}
                            </div>
                            <div className="t-student">
                                <div className="t-avatar">{t.emoji}</div>
                                <div>
                                    <p className="t-name">{t.name}</p>
                                    <p className="t-college">{t.college}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="t-dots">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`t-dot ${i === idx ? 't-dot--active' : ''}`}
                            onClick={() => setIdx(Math.min(i, testimonials.length - visible))}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
