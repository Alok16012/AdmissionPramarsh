import './CTABanner.css';
import { FaPhoneAlt } from 'react-icons/fa';

export default function CTABanner() {
    return (
        <section className="cta-banner">
            <div className="container cta-inner">
                <div className="cta-text">
                    <p className="cta-eyebrow">Confused about your options?</p>
                    <h2 className="cta-title">Do You Have A Dream Destination<br />On Your Mind?</h2>
                    <p className="cta-sub">Let's Help You Choose The Best Suited Option!</p>
                    <a href="#" className="btn-outline-white cta-btn">
                        <FaPhoneAlt />
                        TALK TO OUR COUNSELOR
                    </a>
                </div>
                <div className="cta-illustration">
                    <div className="cta-girl-wrapper">
                        <div className="cta-girl-circle" />
                        <div className="cta-floating-card cta-card-1">📚 MBBS Abroad</div>
                        <div className="cta-floating-card cta-card-2">🎓 B.Tech / MBA</div>
                        <div className="cta-floating-card cta-card-3">🌍 50+ Countries</div>
                        <div className="cta-emoji-large">🧑‍🎓</div>
                    </div>
                </div>
            </div>
            <div className="cta-bg-circles">
                <div className="cta-circle cta-circle-1" />
                <div className="cta-circle cta-circle-2" />
            </div>
        </section>
    );
}
