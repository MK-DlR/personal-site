// src/components/Footer.jsx

/* footer for non-project detail pages */
function Footer({ variant, nextSection }) {
    return (
        <div className={`${variant}-footer`}>
            <div className="footer-left">
                <div className={`footer-label ${variant}-label`}>Next</div>
                <h3 className={`next-section ${variant}-next`}>{nextSection.label} →</h3>
            </div>
            <div className="footer-right">
                <a href={nextSection.href} className={`nav-arrow ${variant}-nav`}>→</a>
            </div>
        </div>
    )
}

export default Footer