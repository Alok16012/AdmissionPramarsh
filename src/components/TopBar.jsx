import './TopBar.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner container">
        <div className="top-bar-left">
          <span>India's Premier Education Consultancy — Admission Pramarsh</span>
        </div>
        <div className="top-bar-right">
          <a href="tel:8809888333" className="top-contact">
            <FaPhoneAlt /> +91 8809888333
          </a>
          <a href="#" className="top-bar-link">
            Admission Guidance
          </a>
          <a href="#" className="top-bar-link">
            Compare Universities
          </a>
        </div>
      </div>
    </div>
  );
}
