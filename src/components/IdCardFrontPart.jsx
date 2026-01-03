import React from 'react';
import './IdCardFrontPart.css';

const IdCardFrontPart = () => {
    return (
        <div className="id-card-front-container">
            {/* Decorative Shapes Removed */}
            <div className="border-right-partial"></div>
            <div className="border-right-bottom"></div>


            {/* Header */}
            <div className="front-header">
                <div className="logo-section">
                    <div className="logo-circle">LOGO</div>
                    <div className="hospital-title-front">
                        <div className="hospital-name-main">MILLENNIUM</div>
                        <div className="hospital-subtitle">SPECIALIZED HOSPITAL LTD.</div>
                        <div className="address-front">Ashraf Tower, 4/1 Walter Road, Sutrapur, Dhaka-1100.</div>
                    </div>
                </div>
            </div>

            {/* Photo */}
            <div className="photo-placeholder">
                {/* Image would go here */}
            </div>

            {/* Details */}
            <div className="details-section">
                <div className="id-label">ID: -------</div>
                <div className="person-name">MD. PARVEJ HOSSEN</div>
                <div className="designation">JUNIOR PROGRAMMER</div>
                <div className="department">IT DEPARTMENT</div>

                <div className="blood-group">
                    BLOOD GROUP: <span className="blood-val">O+</span>
                </div>
                <div className="joining-date">
                    JOINING DATE : 01-01-2026
                </div>
            </div>
        </div>
    );
};

export default IdCardFrontPart;
