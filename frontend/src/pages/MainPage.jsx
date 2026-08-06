// src/pages/MainPage.jsx

// imports
import { Link } from 'react-router-dom'
import Header from '../components/HeaderHome.jsx'
import ButtonMailto from '../helpers/ButtonMailto.jsx'

import projects from "../data/projects"

import heroImage from '../assets/hero-image.jpg'

function MainPage() {
    return (
        <>
            <Header />
            <div className="main-page">
                <div id="hero" className="panel">
                    <div className="hero-left">
                        <div className="label">// full stack developer</div>
                        <h1 className="hero-title title">Hi, I<br />build things.</h1>
                        <p className="hero-content content">I really enjoy anything creative, art based, or puzzle-like; so learning to code has been a natural fit for me! Here you can find some examples of my work and also learn a bit more about me.</p>
                    </div>
                    <img
                        src={heroImage}
                        alt="hero image"
                        className="hero-image"
                    />
                </div>

                <div id="about" className="panel">
                    <div className="tech-skills">
                        <h3 className="tech-label">{">"} technical_skills</h3>
                        <div className="skill-row">
                            <div className="skill-label">Languages & Runtime</div>
                            <div className="skill-list">
                                <span className="skill-button">JavaScript</span>
                                <span className="skill-button">Node.js</span>
                            </div>
                        </div>

                        <div className="skill-row">
                            <div className="skill-label">Frameworks & Templating</div>
                            <div className="skill-list">
                                <span className="skill-button">React</span>
                                <span className="skill-button">Express</span>
                                <span className="skill-button">EJS</span>
                            </div>
                        </div>

                        <div className="skill-row">
                            <div className="skill-label">Database & Tools</div>
                            <div className="skill-list">
                                <span className="skill-button">Prisma</span>
                                <span className="skill-button">PostgreSQL</span>
                                <span className="skill-button">Vite</span>
                                <span className="skill-button">Git</span>
                                <span className="skill-button">Postman</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="label">01 — About</div>
                        <h2 className="section-title-dark title">A bit<br />about me.</h2>
                            <p className="about-content content">I'm a self-taught full-stack developer working primarily in JavaScript. I enjoy approaching application creation from the perspective of future users with functionality in mind.</p>
                            <p className="about-content content">I like working on unique projects that solve a specific problem or need. The more creative and unusual, the better!</p>
                            <Link to="/about" className="details-link">→ Full about & skills page</Link>
                    </div>
                </div>

                <div id="projects" className="panel">
                    <div className="projects-header">
                        <div className="projects-left">
                            <div className="label">02 — Projects</div>
                            <h2 className="section-title-dark title">Featured work.</h2>
                        </div>
                        <div className="projects-right">
                            <Link to="/projects" className="details-link">→ View more projects</Link>
                        </div>
                    </div>

                    <div className="card-container">
                    {projects.filter(project => project.featured).map(project => 
                        <div className="project-card">
                        <img
                            src={project.preview}
                            alt="project screenshot"
                            className="project-image"
                        />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <div className="project-desc">{project.blurb}</div>
                            <div className="tags-list">
                                {project.tags.map((tag, index) =>
                                    <span key={index} className="tag light-tag">{tag}</span>
                                )}
                            </div>
                            <div className="links-container">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live</a>
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">Code</a>
                                <Link to={`/projects/${project.slug}`} className="project-link">Details →</Link>
                            </div>
                        </div>
                    </div>
                    )}
                    </div>
                </div>

                <div id="journey" className="panel">
                    <div className="journey-container">
                        <div className="journey-header">
                            <div className="label accented-label">03 — Journey</div>
                            <h2 className="section-title-light title">Where I've been,<br />where I'm headed.</h2>
                        </div>
                        <div className="journey-content">
                            <div className="journey-left">
                                <div className="focus">
                                    <div className="mini-label">Currently</div>
                                    <p className="focus-blurb">Learning TypeScript and working on a Job Application tracker project.</p>
                                </div>
                                <div>
                                    <Link to="/journey" className="details-link accented-link">→ Full journey page</Link>
                                </div>
                            </div>
                            <div className="journey-right">
                                <div className="timeline-entry">
                                    <span className="entry-year">Apr 2025</span>
                                    <div className="entry-text">
                                        <h4 className="entry-header">Started learning to code</h4>
                                        <div className="entry-desc">Began The Odin Project's Full-Stack JavaScript course.</div>
                                    </div>
                                </div>

                                <div className="timeline-entry">
                                    <span className="entry-year">Jul 2025</span>
                                    <div className="entry-text">
                                        <h4 className="entry-header">First real JavaScript project shipped</h4>
                                        <div className="entry-desc">Completed a "Battleship" style game.</div>
                                    </div>
                                </div>

                                <div className="timeline-entry">
                                    <span className="entry-year">Mar 2026</span>
                                    <div className="entry-text">
                                        <h4 className="entry-header">Second real Full-Stack Express project shipped</h4>
                                        <div className="entry-desc">Completed the "Messaging Application" project.</div>
                                    </div>
                                </div>

                                <div className="timeline-entry">
                                    <span className="entry-year">Aug 2026</span>
                                    <div className="entry-text">
                                        <h4 className="entry-header">Finished The Odin Project</h4>
                                        <div className="entry-desc">Completed The Odin Project's Full-Stack JavaScript course.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="hobbies" className="panel">
                    <div className="hobbies-content">
                        <div className="hobbies-panel-label label">04 — Art & Hobbies</div>
                        <h2 className="section-title-dark hobbies-header">Outside the editor.</h2>
                        <p className="hobbies-blurb">A few things I enjoy when I'm not working on code.</p>
                        <div className="hobby-container">
                            <div className="hobby-item">
                                <div className="badge-circle imghover arthover">
                                    <span className="emoji">✏️</span>
                                </div>
                                <span className="hobbies-label">Digital Art</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover crochethover">
                                    <span className="emoji">🧶</span>
                                </div>
                                <span className="hobbies-label">Crochet</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover gamehover">
                                    <span className="emoji">🎮</span>
                                </div>
                                <span className="hobbies-label">Gaming</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover bakehover">
                                    <span className="emoji">🍰</span>
                                </div>
                                <span className="hobbies-label">Baking</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover gardenhover">
                                    <span className="emoji">🌱</span>
                                </div>
                                <span className="hobbies-label">Gardening</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover cathover">
                                    <span className="emoji">🐈</span>
                                </div>
                                <span className="hobbies-label">Cats *</span>
                            </div>
                        </div>
                        <div className="disclaimer">* Cats have been known to involve themselves in my coding work.</div>
                        <Link to="/hobbies" className="details-link">→ See more of my hobbies</Link>
                    </div>
                </div>

                <div id="contact" className="panel">
                    <div className="contact-content">
                        <div className="label accented-label">05 — Contact</div>
                        <h2 className="contact-header">Let's talk.</h2>
                        <p className="contact-blurb">Open to opportunities, collaborations, or just a conversation.</p>
                        <div className="link-row">
                            <a href="https://github.com/MK-DlR" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub ↗</a>
                            <a href="https://www.linkedin.com/in/adrien-newman/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn ↗</a>
                            <a href="https://github.com/MK-DlR" target="_blank" rel="noopener noreferrer" className="contact-link">Resume ↗</a>
                            <ButtonMailto label="Email" mailto="mailto:adriennewman92@gmail.com" className="contact-link"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="credit-footer">
                <div className="credit-footer-left credit-footer-text">
                    © 2026 Adrien Newman
                </div>
                <div className="credit-footer-right credit-footer-text">
                    <a href="https://github.com/MK-DlR" target="_blank" rel="noopener noreferrer">github.com/MK-DlR</a>
                </div>
            </div>
        </>
    )
}

export default MainPage