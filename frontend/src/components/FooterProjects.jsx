// src/components/FooterProjects.jsx

// imports
import { Link } from 'react-router-dom';
import projects from "../data/projects";

/* footer for project details page */
function FooterProjects({ currentSlug }) {
    /* find next project to display in footer */
    const findProject = (project) => currentSlug === project.slug;

    let currentIndex = projects.findIndex(findProject);

    let nextIndex = (currentIndex + 1);

    let nextProject = projects[nextIndex];

    return (
        <div className="dark-footer">
            <div className="footer-left">
                <div className="footer-label accented-label">Next Project</div>
                <h3 className="next-section dark-next">{nextProject ? nextProject.title : 'All Projects'} →</h3>
            </div>
            <div className="footer-right">
                <Link to={nextProject ? `/projects/${nextProject.slug}` : `/projects/`} className="nav-arrow dark-nav">→</Link>
            </div>
        </div>
    )
}

export default FooterProjects