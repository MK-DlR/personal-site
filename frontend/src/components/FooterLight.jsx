// src/components/FooterLight.jsx

/* light footer for dark pages */
function FooterLight() {
    return (
        <div className="light-footer">
            <div className="footer-left">
                <div className="footer-label label">Next</div>
                <h3 className="next-section light-next">[TODO] →</h3>
            </div>
            <div className="footer-right">
                <a href="#" className="nav-arrow light-nav">→</a>
            </div>
        </div>
    )
}

export default FooterLight