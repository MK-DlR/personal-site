// src/components/Footer.jsx

// imports
import { Link } from 'react-router-dom';

/* footer for non-project detail pages */
function Footer({ variant, nextSection }) {
    return (
        <div className={`${variant}-footer`}>
            <div className="footer-left">
                <div className={`footer-label ${variant}-label`}>Next</div>
                <h3 className={`next-section ${variant}-next`}>{nextSection.label} →</h3>
            </div>
            <div className="footer-right">
                <Link to={nextSection.href} className={`nav-arrow ${variant}-nav`}>→</Link>
            </div>
        </div>
    )
}

export default Footer