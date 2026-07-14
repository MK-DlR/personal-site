// src/pages/AllProjects.jsx

// imports
import Header from '../components/HeaderPages.jsx'
import Footer from '../components/Footer.jsx'

import projects from "../data/projects";

function AllProjects() {
    return (
        <>
            <title>All Projects</title>
            <Header />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">All Projects</div>
                    <h1 className="details-header-lg">Everything I've built.</h1>
                    <div className="header-blurb">The three on my homepage are what I'd point you to first — this is the fuller list, including smaller experiments, coursework, and side builds.</div>
                </div>
                <div className="all-projects-details-content">
                    <div className="filter-container">
                        <span className="filter-pill active">All</span>
                        <span className="filter-pill">React</span>
                        <span className="filter-pill">Express</span>
                        <span className="filter-pill">Node.js</span>
                        <span className="filter-pill">Prisma</span>
                        <span className="filter-pill">PostgreSQL</span>
                        <span className="filter-pill">Design</span>
                    </div>
                    <div className="all-projects-container">

                    {projects.map(project =>
                        <div className="all-projects-card">
                            <img
                                src={project.preview}
                                alt="project thumbnail"
                                className="project-thumbnail"
                            />
                            <div className="project-card-center">
                                <h3 className="project-name">{project.title}</h3>
                                <p className="project-blurb">{project.blurb}</p>
                                <div className="project-tags-container">
                                    {project.stack.map((stack, index) =>
                                        <span key={index} className="tag light-tag">{stack}</span>
                                    )}
                                </div>
                            </div>
                            <div className="project-card-right">
                                <span className="mini-header">{project.year}</span>
                                <div className="project-links-container">
                                    <a href={project.liveLink} className="project-link">Live ↗</a>
                                    <a href={project.codeLink} className="project-link">Code ↗</a>
                                    <a href={`/projects/${project.slug}`} className="project-link">Details ↗</a>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
            <Footer 
                variant="dark"
                nextSection={{ label: 'Journey', href: '/journey'}}
            />
        </>
    )
}

export default AllProjects

/* 
TODO:
add filter button functionality
add filter button hover
*/