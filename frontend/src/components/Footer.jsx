// src/components/Footer.jsx

/* footer for non-project detail pages */
function Footer({ variant }) {
    return (
        <div className={`${variant}-footer`}>
            <div className="footer-left">
                <div className={`footer-label ${variant}-label`}>Next</div>
                <h3 className={`next-section ${variant}-next`}>[TODO] →</h3>
            </div>
            <div className="footer-right">
                <a href="#" className={`nav-arrow ${variant}-nav`}>→</a>
            </div>
        </div>
    )
}

export default Footer

/* 
TODO:
conditionally display "next-section" title
based on the page currently displayed
title should be the next panel section from the main page

conditionally render link for nav-arrow
*/