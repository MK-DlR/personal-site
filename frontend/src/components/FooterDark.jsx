// src/components/FooterDark.jsx

/* dark footer for light pages */
function FooterDark() {
    return (
        <div className="dark-footer">
            <div className="footer-left">
                <div className="footer-label accented-label">Next</div>
                <h3 className="next-section dark-next">[TODO] →</h3>
            </div>
            <div className="footer-right">
                <a href="#" className="nav-arrow dark-nav">→</a>
            </div>
        </div>
    )
}

export default FooterDark

/* 
TODO:
conditionally display "next-section" title
based on the page currently displayed
title should be the next panel section from the main page

conditionally render link for nav-arrow
*/