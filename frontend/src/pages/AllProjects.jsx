// src/pages/AllProjects.jsx

// imports
import Header from '../components/HeaderPages.jsx'
import Footer from '../components/FooterDark.jsx'

import placeholderImage from '../assets/placeholder.jpg'

function AllProjects() {
    return (
        <>
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
                        <div className="all-projects-card">
                            <img
                                src={placeholderImage}
                                alt="project thumbnail"
                                className="project-thumbnail"
                            />
                            <div className="project-card-center">
                                <h3 className="project-name">Project Name</h3>
                                <p className="project-blurb">Short one-line description of what this project is and why it exists.</p>
                                <div className="project-tags-container">
                                    <span className="project-tag">Tag</span>
                                    <span className="project-tag">Tag</span>
                                </div>
                            </div>
                            <div className="project-card-right">
                                <span className="mini-header">2024</span>
                                <div className="project-links-container">
                                    <a href="#" className="project-link">Live ↗</a>
                                    <a href="#" className="project-link">Code ↗</a>
                                    <a href="#" className="project-link">Details ↗</a>
                                </div>
                            </div>
                        </div>

                        <div className="all-projects-card">
                            <img
                                src={placeholderImage}
                                alt="project thumbnail"
                                className="project-thumbnail"
                            />
                            <div className="project-card-center">
                                <h3 className="project-name">Project Name</h3>
                                <p className="project-blurb">Short one-line description of what this project is and why it exists.</p>
                                <div className="project-tags-container">
                                    <span className="project-tag">Tag</span>
                                    <span className="project-tag">Tag</span>
                                </div>
                            </div>
                            <div className="project-card-right">
                                <span className="mini-header">2024</span>
                                <div className="project-links-container">
                                    <a href="#" className="project-link">Live ↗</a>
                                    <a href="#" className="project-link">Code ↗</a>
                                    <a href="#" className="project-link">Details ↗</a>
                                </div>
                            </div>
                        </div>

                        <div className="all-projects-card">
                            <img
                                src={placeholderImage}
                                alt="project thumbnail"
                                className="project-thumbnail"
                            />
                            <div className="project-card-center">
                                <h3 className="project-name">Project Name</h3>
                                <p className="project-blurb">Short one-line description of what this project is and why it exists.</p>
                                <div className="project-tags-container">
                                    <span className="project-tag">Tag</span>
                                    <span className="project-tag">Tag</span>
                                </div>
                            </div>
                            <div className="project-card-right">
                                <span className="mini-header">2024</span>
                                <div className="project-links-container">
                                    <a href="#" className="project-link">Live ↗</a>
                                    <a href="#" className="project-link">Code ↗</a>
                                    <a href="#" className="project-link">Details ↗</a>
                                </div>
                            </div>
                        </div>

                        <div className="all-projects-card">
                            <img
                                src={placeholderImage}
                                alt="project thumbnail"
                                className="project-thumbnail"
                            />
                            <div className="project-card-center">
                                <h3 className="project-name">Project Name</h3>
                                <p className="project-blurb">Short one-line description of what this project is and why it exists.</p>
                                <div className="project-tags-container">
                                    <span className="project-tag">Tag</span>
                                    <span className="project-tag">Tag</span>
                                </div>
                            </div>
                            <div className="project-card-right">
                                <span className="mini-header">2024</span>
                                <div className="project-links-container">
                                    <a href="#" className="project-link">Live ↗</a>
                                    <a href="#" className="project-link">Code ↗</a>
                                    <a href="#" className="project-link">Details ↗</a>
                                </div>
                            </div>
                        </div>

                        <div className="all-projects-card">
                            <img
                                src={placeholderImage}
                                alt="project thumbnail"
                                className="project-thumbnail"
                            />
                            <div className="project-card-center">
                                <h3 className="project-name">Project Name</h3>
                                <p className="project-blurb">Short one-line description of what this project is and why it exists.</p>
                                <div className="project-tags-container">
                                    <span className="project-tag">Tag</span>
                                    <span className="project-tag">Tag</span>
                                </div>
                            </div>
                            <div className="project-card-right">
                                <span className="mini-header">2024</span>
                                <div className="project-links-container">
                                    <a href="#" className="project-link">Live ↗</a>
                                    <a href="#" className="project-link">Code ↗</a>
                                    <a href="#" className="project-link">Details ↗</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllProjects

/* 
TODO:
add filter button functionality
add filter button hover
*/