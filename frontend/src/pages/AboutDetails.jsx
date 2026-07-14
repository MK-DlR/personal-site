// src/pages/About.jsx

// imports
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ButtonMailto from '../helpers/ButtonMailto.jsx'

function AboutDetails() {
    return (
        <>
            <title>About & Skills</title>
            <Header 
                variant="light"
            />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">About & Skills</div>
                    <h1 className="details-header-lg">More about me.</h1>
                    <div className="header-blurb">The full version — background, how I work, and a closer look at the languages, frameworks, and tools I use day to day.</div>
                </div>
                <div className="about-details-content">
                    <div className="about-details-left">
                        <h4 className="mini-header about-mini">Quick Facts</h4>
                        <ul className="fact-list">
                            <li className="quick-info">Based in</li>
                            <li className="fact-label">City, Country</li>
                            <li className="quick-info">Focus</li>
                            <li className="fact-label">Full-stack web development</li>
                            <li className="quick-info">Currently</li>
                            <li className="fact-label">What you're doing right now</li>
                            <li className="quick-info">Education</li>
                            <li className="fact-label">School / self-taught / bootcamp</li>
                        </ul>
                        <h4 className="mini-header about-mini">Elsewhere</h4>
                        <div className="elsewhere-links-container">
                            <a href="https://github.com/MK-DlR" className="elsewhere-link">→ GitHub</a>
                            <a href="www.linkedin.com/in/adrien-newman/" className="elsewhere-link">→ LinkedIn</a>
                            <a href="#" className="elsewhere-link">→ Resume (PDF)</a>
                            <ButtonMailto label="→ Email" mailto="mailto:adriennewman92@gmail.com" className="elsewhere-link"/>
                        </div>
                    </div>
                    <div className="details-page-right">
                        <h2 className="details-header">Who I am</h2>
                        <p className="about-details-blurb">Expanded version of your about blurb — background, how you got into development, and what drives the way you build.</p>
                        <p className="about-details-blurb">Second paragraph — working style, what you value in a project or team, anything that gives a sense of you beyond the resume facts.</p>

                        <h2 className="details-header">Core skills</h2>
                        <div className="tool-list">
                            <span className="label tool-label">Languages</span>
                            <div className="bar-row">
                                <span className="skill-name">JavaScript</span>
                                <div className="bar-track">
                                    <div
                                        className="bar-fill"
                                        style={{ width: "90%" }}
                                    ></div>
                                </div>
                            </div>

                            <span className="label tool-label">Frameworks</span>
                                <div className="bar-row">
                                    <span className="skill-name">React</span>
                                    <div className="bar-track">
                                        <div
                                            className="bar-fill"
                                            style={{ width: "80%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="bar-row">
                                <span className="skill-name">Express</span>
                                <div className="bar-track">
                                    <div
                                        className="bar-fill"
                                        style={{ width: "80%" }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <h2 className="details-header">Tools I use</h2>
                        <div className="tool-container">
                            <div className="tool">
                                <span className="tool-initial">Gh</span>
                                <span className="tool-name">GitHub</span>
                            </div>
                            <div className="tool">
                                <span className="tool-initial">Nd</span>
                                <span className="tool-name">Node.js</span>
                            </div>
                            <div className="tool">
                                <span className="tool-initial">Pr</span>
                                <span className="tool-name">Prisma</span>
                            </div>
                            <div className="tool">
                                <span className="tool-initial">Ps</span>
                                <span className="tool-name">PostgreSQL</span>
                            </div>
                            <div className="tool">
                                <span className="tool-initial">Pm</span>
                                <span className="tool-name">Postman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer 
                variant="dark"
                nextSection={{ label: 'Projects', href: '/projects'}}
            />
        </>
    )
}

export default AboutDetails