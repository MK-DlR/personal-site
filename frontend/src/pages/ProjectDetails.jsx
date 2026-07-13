// src/pages/ProjectDetails.jsx

// imports
import { useParams } from 'react-router-dom'

import Header from '../components/HeaderPages.jsx'
import Footer from '../components/FooterProjects.jsx'

import projects from "../data/projects";
import placeholderDetailsImage from '../assets/placeholder-hover.png'

function ProjectDetails() {
    const { slug } = useParams();

    /* find next project to display in footer */
    const findProject = (project) => slug === project.slug;

    let currentProject = projects.find(findProject);

    if (!currentProject) {
        return (
            <>
                <title>Page Not Found</title>
                <Header />
                <div className="details-page-header">
                    <div className="label">Error</div>
                    <h1 className="details-header-lg">Page not found</h1>
                    <div className="header-blurb">This project cannot be found.</div>
                </div>
                <Footer 
                    currentSlug={slug}
                />
            </>
        )
    }

    return (
        <>
            <title>Project Details</title>
            <Header />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">Project {currentProject.number}</div>
                    <h1 className="details-header-lg">{currentProject.title}</h1>
                    <div className="header-blurb">{currentProject.blurb}</div>
                    <div className="dev-details">
                        <ul className="details-list">
                            <li className="mini-header">Role</li>
                            <li className="quick-info">{currentProject.role}</li>
                        </ul>
                        <ul className="details-list">
                            <li className="mini-header">Timeline</li>
                            <li className="quick-info">{currentProject.timeline}</li>
                        </ul>
                        <ul className="details-list">
                            <li className="mini-header">Type</li>
                            <li className="quick-info">{currentProject.type}</li>
                        </ul>
                    </div>
                    <div className="lg-buttons-container">
                        <a href={currentProject.liveLink} className="lg-button solid">View live ↗</a>
                        <a href={currentProject.codeLink} className="lg-button">View code ↗</a>
                    </div>
                </div>

                <img
                    alt="project preview"
                    className="project-preview"
                />

                <div className="project-details-content">
                    <div className="project-details-left">
                        <h4 className="mini-header about-mini">Stack</h4>
                        <ul className="stack-list">
                            <span className="filter-pill">{currentProject.stack}</span>
                            <span className="filter-pill">React</span>
                            <span className="filter-pill">Express</span>
                            <span className="filter-pill">Node.js</span>
                            <span className="filter-pill">Prisma</span>
                            <span className="filter-pill">PostgreSQL</span>
                            <span className="filter-pill">Design</span>
                        </ul>
                        <h4 className="mini-header about-mini">Links</h4>
                        <div className="elsewhere-links-container">
                            <a href={currentProject.liveLink} className="elsewhere-link">→ Live site</a>
                            <a href={currentProject.codeLink} className="elsewhere-link">→ GitHub repo</a>
                        </div>
                    </div>

                    <div className="project-details-right details-page-right">
                        <h2 className="details-header">The problem</h2>
                        <p className="about-details-blurb">{currentProject.problem}</p>
                        <h2 className="details-header">What I built</h2>
                        <p className="about-details-blurb">{currentProject.built}</p>
                        <ul className="key-features">
                            <li className="feature">{currentProject.feature}</li>
                            <li className="feature">Feature 2</li>
                            <li className="feature">Feature 3</li>
                        </ul>
                        <div className="detail-images">
                            <img
                                src={placeholderDetailsImage}
                                alt="project details"
                                className="project-details"
                            />
                            <img
                                src={placeholderDetailsImage}
                                alt="project details"
                                className="project-details"
                            />
                        </div>
                        <div className="quote">"{currentProject.quote}"</div>
                        <h2 className="details-header">Challenges & what I'd change</h2>
                        <p className="about-details-blurb">{currentProject.challenges}</p>
                    </div>
                </div>
            </div>
            <Footer 
                currentSlug={slug}
            />
        </>
    )
}

export default ProjectDetails