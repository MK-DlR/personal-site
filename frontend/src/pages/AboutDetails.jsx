// src/pages/About.jsx

// imports
import Header from '../components/HeaderPages.jsx'
import Footer from '../components/FooterDark.jsx'

function AboutDetails() {
    return (
        <>
            <Header />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">About & Skills</div>
                    <h1 className="details-header-lg">More about me.</h1>
                    <div className="about-header-blurb">The full version — background, how I work, and a closer look at the languages, frameworks, and tools I use day to day.</div>
                </div>
                <div className="about-details-content">
                    <div className="about-details-left">
                        <div className="mini-header">Quick Facts</div>
                        <div className="fact-container">
                            <div className="quick-info">Based in</div>
                            <div className="fact-label">City, Country</div>
                        </div>
                        <div className="fact-container">
                            <div className="quick-info">Focus</div>
                            <div className="fact-label">Full-stack web development</div>
                        </div>
                        <div className="fact-container">
                            <div className="quick-info">Currently</div>
                            <div className="fact-label">What you're doing right now</div>
                        </div>
                        <div className="fact-container">
                            <div className="quick-info">Education</div>
                            <div className="fact-label">School / self-taught / bootcamp</div>
                        </div>
                        <div className="mini-header">Elsewhere</div>
                        <div className="links-container">
                            <a href="https://github.com/MK-DlR" className="elsewhere-link">→ GitHub</a>
                            <a href="www.linkedin.com/in/adrien-newman/" className="elsewhere-link">→ LinkedIn</a>
                            <a href="#" className="elsewhere-link">→ Resume (PDF)</a>
                            <a href="#" className="elsewhere-link">→ Email</a>
                        </div>
                    </div>
                    <div className="about-details-right">
                        <h2 className="details-header">Who I am</h2>
                        <p className="about-details-blurb">Expanded version of your about blurb — background, how you got into development, and what drives the way you build.</p>
                        <p className="about-details-blurb">Second paragraph — working style, what you value in a project or team, anything that gives a sense of you beyond the resume facts.</p>

                        <h2 className="details-header">Core skills</h2>
                        <div className="label">Languages</div>
                        <div>Javascript</div> [bar here]
                        <div className="label">Frameworks</div>
                        <div>React</div> [bar here]
                        <div>Express</div> [bar here]

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
            <Footer />
        </>
    )
}

export default AboutDetails