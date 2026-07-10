// src/pages/MainPage.jsx

// imports
import Header from '../components/HeaderHome.jsx'
import CreditFooter from '../components/FooterHome.jsx'

import heroImage from '../assets/hero-image.jpg'
import placeholderImage from '../assets/placeholder.jpg'

function MainPage() {
    return (
        <>
            <Header />
            <div className="main-page">
                <div id="hero" className="panel">
                    <div className="hero-left">
                        <div className="label">// developer & designer</div>
                        <h1 className="hero-title title">Hi, I<br />build things.</h1>
                        <p className="hero-content content">Software developer focused on clean, functional interfaces and thoughtful engineering. This is where I keep my work, my path, and a few things I make for fun.</p>
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
                            <div className="skill-label">Languages</div>
                            <div className="skill-list">
                                <span className="skill-button">JavaScript</span>
                            </div>
                        </div>

                        <div className="skill-row">
                            <div className="skill-label">Frameworks</div>
                            <div className="skill-list">
                                <span className="skill-button">React</span>
                                <span className="skill-button">Express</span>
                            </div>
                        </div>

                        <div className="skill-row">
                            <div className="skill-label">Tools</div>
                            <div className="skill-list">
                                <span className="skill-button">Github</span>
                                <span className="skill-button">Node.js</span>
                                <span className="skill-button">Prisma</span>
                                <span className="skill-button">PostgreSQL</span>
                                <span className="skill-button">Postman</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="label">01 — About</div>
                        <h2 className="section-title-dark title">A bit<br />about me.</h2>
                            <p className="about-content content">Short paragraph about who you are, what kind of developer you are, and what you care about when building things.</p>
                            <p className="about-content content">Second short paragraph — background, focus area, or what you're currently drawn to.</p>
                            <a href="/about" className="details-link">→ Full about & skills page</a>
                    </div>
                </div>

                <div id="projects" className="panel">
                    <div className="projects-header">
                        <div className="projects-left">
                            <div className="label">02 — Projects</div>
                            <h2 className="section-title-dark title">Selected work.</h2>
                        </div>
                        <div className="projects-right">
                            <a href="/projects" className="details-link">→ View more projects</a>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="project-card">
                            <img
                                src={placeholderImage}
                                alt="project screenshot"
                                className="project-image"
                            />
                            <div className="project-info">
                                <h3>Project Name</h3>
                                <div className="project-desc">One or two sentence blurb describing the project and the problem it solves.</div>
                                <div className="tags-list">
                                    <span className="tag light-tag">project tag</span>
                                    <span className="tag light-tag">project tag</span>
                                </div>
                                <div className="links-container">
                                    <a href="#" className="project-link">Live</a>
                                    <a href="#" className="project-link">Code</a>
                                    <a href="#" className="project-link">Details →</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <img
                                src={placeholderImage}
                                alt="project screenshot"
                                className="project-image"
                            />
                            <div className="project-info">
                                <h3>Project Name</h3>
                                <div className="project-desc">One or two sentence blurb describing the project and the problem it solves.</div>
                                <div className="tags-list">
                                    <span className="tag light-tag">project tag</span>
                                    <span className="tag light-tag">project tag</span>
                                </div>
                                <div className="links-container">
                                    <a href="#" className="project-link">Live</a>
                                    <a href="#" className="project-link">Code</a>
                                    <a href="#" className="project-link">Details →</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <img
                                src={placeholderImage}
                                alt="project screenshot"
                                className="project-image"
                            />
                            <div className="project-info">
                                <h3>Project Name</h3>
                                <div className="project-desc">One or two sentence blurb describing the project and the problem it solves.</div>
                                <div className="tags-list">
                                    <span className="tag light-tag">project tag</span>
                                    <span className="tag light-tag">project tag</span>
                                </div>
                                <div className="links-container">
                                    <a href="#" className="project-link">Live</a>
                                    <a href="#" className="project-link">Code</a>
                                    <a href="#" className="project-link">Details →</a>
                                </div>
                            </div>
                        </div>
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
                                    <p className="focus-blurb">What you're learning or building right now — a sentence or two on your present focus.</p>
                                </div>
                                <div>
                                    <a href="/journey" className="details-link accented-link">→ Full journey page</a>
                                </div>
                            </div>
                            <div className="journey-right">
                                <div className="timeline-entry">
                                    <span className="entry-year">2023</span>
                                    <div className="entry-text">
                                        <h4 className="entry-header">Started learning to code</h4>
                                        <div className="entry-desc">Brief note on how it began.</div>
                                    </div>
                                </div>

                                <div className="timeline-entry">
                                    <span className="entry-year">2024</span>
                                    <div className="entry-text">
                                        <h4 className="entry-header">First real project shipped</h4>
                                        <div className="entry-desc">Brief note on a key milestone.</div>
                                    </div>
                                </div>

                                <div className="timeline-entry">
                                    <span className="entry-year">2025</span>
                                    <div className="entry-text">
                                        <h4 className="entry-header">Deepened focus / new role</h4>
                                        <div className="entry-desc">Brief note on growth.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="art" className="panel">
                    <div className="art-content">
                        <div className="art-panel-label label">04 — Art & Hobbies</div>
                        <h2 className="section-title-dark art-header">Outside the editor.</h2>
                        <p className="art-blurb">A few things I enjoy when I'm not working on code.</p>
                        <div className="hobby-container">
                            <div className="hobby-item">
                                <div className="badge-circle imghover arthover">
                                    <span className="emoji">✏️</span>
                                </div>
                                <span class="art-label">Digital Art</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover crochethover">
                                    <span className="emoji">🧶</span>
                                </div>
                                <span class="art-label">Crochet</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover gamehover">
                                    <span className="emoji">🎮</span>
                                </div>
                                <span class="art-label">Gaming</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover bakehover">
                                    <span className="emoji">🍰</span>
                                </div>
                                <span class="art-label">Baking</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover bookhover">
                                    <span className="emoji">📚</span>
                                </div>
                                <span class="art-label">Reading</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover gardenhover">
                                    <span className="emoji">🌱</span>
                                </div>
                                <span class="art-label">Gardening</span>
                            </div>

                            <div className="hobby-item">
                                <div className="badge-circle imghover cathover">
                                    <span className="emoji">🐈</span>
                                </div>
                                <span class="art-label">Cats *</span>
                            </div>
                        </div>
                        <div className="disclaimer">* Cats have been known to involve themselves in my coding work.</div>
                        <a href="/art" className="details-link">→ See more of my hobbies</a>
                    </div>
                </div>

                <div id="contact" className="panel">
                    <div className="contact-content">
                        <div className="label accented-label">05 — Contact</div>
                        <h2 className="contact-header">Let's talk.</h2>
                        <p className="contact-blurb">Open to opportunities, collaborations, or just a conversation.</p>
                        <div className="link-row">
                            <a href="https://github.com/MK-DlR" className="contact-link">GitHub ↗</a>
                            <a href="https://www.linkedin.com/in/adrien-newman/" className="contact-link">LinkedIn ↗</a>
                            <a href="#" className="contact-link">Email ↗</a>
                        </div>
                    </div>
                </div>
            </div>
            <CreditFooter />
        </>
    )
}

export default MainPage