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
                    <div className="header-blurb">A bit more about me and a more in depth look at how I work and what I use to create with.</div>
                </div>
                <div className="about-details-content">
                    <div className="about-details-left">
                        <h4 className="mini-header about-mini">Quick Facts</h4>
                        <ul className="fact-list">
                            <li className="quick-info">Based in</li>
                            <li className="fact-label">Quebec, Canada</li>
                            <li className="quick-info">Focus</li>
                            <li className="fact-label">Full-stack web development</li>
                            <li className="quick-info">Currently</li>
                            <li className="fact-label">Finishing The Odin Project</li>
                            <li className="quick-info">Education</li>
                            <li className="fact-label">Self-taught</li>
                            <li className="quick-info">Languages</li>
                            <li className="fact-label">English (Native), French (A2/B1)</li>
                        </ul>
                        <h4 className="mini-header about-mini">Elsewhere</h4>
                        <div className="elsewhere-links-container">
                            <a href="https://github.com/MK-DlR" target="_blank" rel="noopener noreferrer" className="elsewhere-link">→ GitHub</a>
                            <a href="https://www.linkedin.com/in/adrien-newman/" target="_blank" rel="noopener noreferrer" className="elsewhere-link">→ LinkedIn</a>
                            <a href="/Adrien-Newman-Resume.pdf" target="_blank" rel="noopener noreferrer" className="elsewhere-link">→ Resume (PDF)</a>
                            <ButtonMailto label="→ Email" mailto="mailto:adriennewman92@gmail.com" className="elsewhere-link"/>
                        </div>
                    </div>
                    <div className="details-page-right">
                        <h2 className="details-header">Who I am</h2>
                        <p className="about-details-blurb">My love of creativity, creation, and puzzles got me into learning to code. There's nothing quite like starting with nothing and ending up with not only "something", but "something" that has actual tangible functionality.</p>
                        <p className="about-details-blurb">I always organize myself and my plan of attack before starting a project, since this helps ensure that I don't overlook or forget anything. It also allows me to brainstorm on the "what" and "why" of a project and features I think it would benefit from.</p>

                        <h2 className="details-header">Core skills</h2>
                        <div className="tool-list">
                            <span className="label tool-label">Languages & Runtime</span>
                            <div className="bar-row">
                                <div className="tool">
                                    <span className="tool-initial">Js</span>
                                    <span className="tool-name">Javascript</span>
                                </div>
                                <div className="tool">
                                    <span className="tool-initial">Nd</span>
                                    <span className="tool-name">Node.js</span>
                                </div>
                            </div>

                            <span className="label tool-label">Frameworks & Templating</span>
                            <div className="bar-row">
                                <div className="tool">
                                    <span className="tool-initial">Rt</span>
                                    <span className="tool-name">React</span>
                                </div>
                                <div className="tool">
                                    <span className="tool-initial">Ex</span>
                                    <span className="tool-name">Express</span>
                                </div>
                                <div className="tool">
                                    <span className="tool-initial">Ej</span>
                                    <span className="tool-name">EJS</span>
                                </div>
                            </div>
                        </div>

                        <span className="label tool-label">Databases</span>
                            <div className="bar-row">
                                <div className="tool">
                                    <span className="tool-initial">Pr</span>
                                    <span className="tool-name">Prisma</span>
                                </div>
                                <div className="tool">
                                    <span className="tool-initial">Ps</span>
                                    <span className="tool-name">PostgreSQL</span>
                                </div>
                            </div>

                        <h2 className="details-header">Tools I use</h2>
                        <div className="tool-container">
                            <div className="tool">
                                <span className="tool-initial">Vi</span>
                                <span className="tool-name">Vite</span>
                            </div>
                            <div className="tool">
                                <span className="tool-initial">Gt</span>
                                <span className="tool-name">Git</span>
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