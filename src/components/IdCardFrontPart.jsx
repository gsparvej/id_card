import React from 'react';
import './IdCardFrontPart.css';
import logo from '../assets/ID Card Logo.png'; // Assuming a logo asset might be used, otherwise falling back to text
// We can use the 'logo-circle' for now as per previous code if no asset.

const IdCardFrontPart = () => {
    return (
        <div className="id-card-front-container">
            {/* Background Shapes */}
            <div className="shape-top-right"></div>
            <div className="shape-bottom-left"></div>
            <div className="shape-bottom-right"></div>

            {/* Header */}
            <div className="front-header">
                <div className="logo-section">
                    {/* Replaced Text/Circle Logo with PNG Image */}
                    <img src={logo} alt="Hospital Logo" className="hospital-logo-img" />
                </div>
            </div>

            {/* Photo */}
            <div className="photo-section">
                <div className="photo-placeholder">
                    {/* Image would go here */}
                </div>
            </div>

            {/* Details */}
            <div className="details-section">
                <div className="id-label">ID: 25050312</div>
                <div className="person-name">GOLAM MUQTADER SHAIQ</div>
                <div className="designation">EXECUTIVE</div>
                <div className="department">IT/HR</div>

                <div className="blood-group">
                    BLOOD GROUP: <span className="blood-val">A+</span>
                </div>
                <div className="joining-date">
                    JOINING DATE : 01-05-2025
                </div>
            </div>

            {/* Small bottom right triangle decoration if needed, checking image: 
                 There is a blue triangle at bottom right corner? 
                 The image shows the bottom-left shape extends. 
                 Wait, looking at the uploaded image:
                 - Left side: Thick blue border from bottom up to ~75%.
                 - Top/Right side: Thick blue border from top-left (angled) to right, then down to ~75%.
                 - Bottom Right: There is a small blue triangle in the corner.
             */}
            {/* Right Vertical Borders (Separated) */}
            <div className="right-border-top"></div>
            <div className="right-border-bottom"></div>
        </div>
    );
};

export default IdCardFrontPart;
