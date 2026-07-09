// src/components/FooterProjects.jsx

/* footer for project details page */
function FooterProjects() {
    return (
        <div className="dark-footer">
            <div className="footer-left">
                <div className="footer-label accented-label">Next Project</div>
                <h3 className="next-section dark-next">[TODO Project #] →</h3>
            </div>
            <div className="footer-right">
                <a href="#" className="nav-arrow dark-nav">→</a>
            </div>
        </div>
    )
}

export default FooterProjects

/* 
TODO:
conditionally display the next project 
from the all projects details page
*/