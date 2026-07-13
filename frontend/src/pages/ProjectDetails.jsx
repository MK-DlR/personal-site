// src/pages/Project.jsx

// imports
import Header from '../components/HeaderPages.jsx'
import Footer from '../components/FooterProjects.jsx'

import placeholderDetailsImage from '../assets/placeholder-hover.png'

function ProjectDetails() {
    return (
        <>
            <title>Project Details</title>
            <Header />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">Project 01</div>
                    <h1 className="details-header-lg">Project One</h1>
                    <div className="header-blurb">A one or two sentence expansion on the project's blurb — what it is, who it's for, and the core problem it solves.</div>
                    <div className="dev-details">
                        <ul className="details-list">
                            <li className="mini-header">Role</li>
                            <li className="quick-info">Solo developer</li>
                        </ul>
                        <ul className="details-list">
                            <li className="mini-header">Timeline</li>
                            <li className="quick-info">Jan – Mar 2025</li>
                        </ul>
                        <ul className="details-list">
                            <li className="mini-header">Type</li>
                            <li className="quick-info">Full-stack web app</li>
                        </ul>
                    </div>
                    <div className="lg-buttons-container">
                        <a href="#" className="lg-button solid">View live ↗</a>
                        <a href="#" className="lg-button">View code ↗</a>
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
                            <span className="filter-pill">React</span>
                            <span className="filter-pill">Express</span>
                            <span className="filter-pill">Node.js</span>
                            <span className="filter-pill">Prisma</span>
                            <span className="filter-pill">PostgreSQL</span>
                            <span className="filter-pill">Design</span>
                        </ul>
                        <h4 className="mini-header about-mini">Links</h4>
                        <div className="elsewhere-links-container">
                            <a href="#" className="elsewhere-link">→ Live site</a>
                            <a href="#" className="elsewhere-link">→ GitHub repo</a>
                        </div>
                    </div>

                    <div className="project-details-right details-page-right">
                        <h2 className="details-header">The problem</h2>
                        <p className="about-details-blurb">A short paragraph on what prompted the project — the gap, need, or idea you were responding to.</p>
                        <h2 className="details-header">What I built</h2>
                        <p className="about-details-blurb">Walk through the core functionality and how it addresses the problem. Keep it concrete — describe actual features rather than generic claims.</p>
                        <ul className="key-features">
                            <li className="feature">Feature 1</li>
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
                        <div className="quote">"An optional callout for a specific technical challenge or interesting decision worth highlighting."</div>
                        <h2 className="details-header">Challenges & what I'd change</h2>
                        <p className="about-details-blurb">A short, honest paragraph on something that was hard, a tradeoff you made, or what you'd do differently with more time.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectDetails