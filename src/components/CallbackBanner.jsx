import { useState } from 'react';
import './CallbackBanner.css';
import { FaHeadphones, FaPaperPlane } from 'react-icons/fa';

export default function CallbackBanner() {
    const [phone, setPhone] = useState('');

    return (
        <section className="callback-banner" id="contact">
            <div className="callback-bg-pattern" />
            <div className="container callback-inner">
                <div className="callback-text">
                    <div className="callback-icon-wrap">
                        <FaHeadphones />
                    </div>
                    <div>
                        <h2 className="callback-title">Get a Call Back From Our Experts</h2>
                        <p className="callback-sub">Our counselors are available Mon–Sat, 9 AM – 7 PM IST</p>
                    </div>
                </div>
                <div className="callback-form">
                    <div className="callback-input-wrap">
                        <span className="callback-flag">🇮🇳 +91</span>
                        <input
                            type="tel"
                            placeholder="Enter Your Contact Number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            className="callback-input"
                        />
                    </div>
                    <button className="callback-submit">
                        <FaPaperPlane /> SUBMIT
                    </button>
                </div>
            </div>
        </section>
    );
}
