// src/pages/AllProjects.jsx

// imports
import { useState } from 'react';

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import { tagFilters } from "../data/filters";
import projects from "../data/projects";

function AllProjects() {
    const [filter, setFilter] = useState("All");

    return (
        <>
            <title>All Projects</title>
            <Header 
                variant="light"
            />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">All Projects</div>
                    <h1 className="details-header-lg">More things I've built.</h1>
                    <div className="header-blurb">Some examples of my work, including the three featured on the main page as well as additional projects.</div>
                </div>
                <div className="all-projects-details-content">
                    <div className="filter-container">
                        {tagFilters.map((option, index) => 
                            <span 
                                key={index} 
                                className={`filter-pill ${option === filter ? 'active' : ''}`}
                                onClick={() => setFilter(option)}
                            >{option}</span>
                        )}
                    </div>
                    <div className="all-projects-container">

                    {projects.filter(project => filter === "All" || project.tags.includes(filter)).map(project =>
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
                                    {project.tags.map((tag, index) =>
                                        <span key={index} className="tag light-tag">{tag}</span>
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