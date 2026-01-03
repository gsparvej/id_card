import React from 'react';
import './IdCardBackPart.css';

const IdCardBackPart = () => {
    return (
        <div className="id-card-container">
            <div className="header-text">If found please return to:</div>
            <div className="hospital-name">MILLENNIUM SPECIALIZED HOSPITAL LTD.</div>
            <div className="address">
                Ashraf Tower, 4/1 Walter Road, Sutrapur,<br />
                Dhaka-1100.
            </div>
            <div className="hotline">Hotline: 09639206020</div>
            <div className="email">Email: management@mshlbd.com</div>

            <div className="qr-code-placeholder">
                {/* Replace with actual QR code image source if available, or generate one */}
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://mshlbd.com"
                    alt="QR Code"
                    className="qr-image"
                />
            </div>

            <div className="emergency-dial">
                DIAL 999<br />
                FOR EMERGENCY
            </div>

            <div className="race-section">
                <div className="race-title">Fire /Smoke Cautions: <span className="race-red">R.A.C.E.</span></div>
                <ul className="race-list">
                    <li>* <span className="race-red">R</span>escue or remove anyone from immediate danger to nearest safe area.</li>
                    <li>* <span className="race-red">A</span>lert or sound an alarm to warn others.</li>
                    <li>* <span className="race-red">C</span>ontain the fire. Close all doors and remove equipment from hallways.</li>
                    <li>* <span className="race-red">E</span>xtinguish the fire using proper fire extinguisher or evacuate.</li>
                </ul>
            </div>

            <div className="footer-caution">
                THIS CARD MUST BE RETURNED<br />
                TO HUMAN RESOURCES UPON<br />
                TERMINATION OF EMPLOYMENT
            </div>

            <div className="website">mshlbd.com</div>
        </div>
    );
};

export default IdCardBackPart;
