// src/pages/Journey.jsx

// imports
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function JourneyDetails
() {
    return (
        <>
            <title>Journey</title>
            <div className="dark-page">
                <Header 
                    variant="dark"
                />
                <div className="details-page-header dark-page-header">
                    <div className="label accented-label">Journey</div>
                    <h1 className="section-title-light details-header-lg">How I got here.</h1>
                    <p className="header-blurb dark-blurb">The longer version of my path so far — what I was learning, building, and focused on at each stage.</p>
                </div>
                <div className="journey-details-content dark-content">
                    <div className="focus">
                        <div className="mini-label">Right now</div>
                        <p className="focus-blurb timeline-blurb">Expanded note on what you're currently learning, building, or focused on — more detail than the homepage version.</p>
                    </div>
                    <div className="full-timeline">
                    <span className="timeline-year">2025</span>
                        <div className="timeline-item">
                            <ul className="timeline-text">
                                <li className="timeline-info">
                                    <h4 className="timeline-header">Deepened focus / new role</h4>
                                    <p className="timeline-desc">A few sentences on this milestone — what changed, what you learned, why it mattered.</p>
                                    <span className="tag dark-tag">Milestone</span>
                                </li>
                            </ul>
                        </div>

                    <span className="timeline-year">2024</span>
                        <div className="timeline-item">
                            <ul className="timeline-text">
                                <li className="timeline-info">
                                    <h4 className="timeline-header">First real project shipped</h4>
                                    <p className="timeline-desc">A few sentences on this milestone — what changed, what you learned, why it mattered.</p>
                                    <span className="tag dark-tag">Project</span>
                                </li>
                            </ul>
                        </div>
                        <div className="timeline-item">
                            <ul className="timeline-text">
                                <li className="timeline-info">
                                    <h4 className="timeline-header">Picked up a new framework</h4>
                                    <p className="timeline-desc">A shorter entry — doesn't need to be a huge milestone, just a note on growth.</p>
                                    <span className="tag dark-tag">Learning</span>
                                </li>
                            </ul>
                        </div>

                    <span className="timeline-year">2023</span>
                        <div className="timeline-item">
                            <ul className="timeline-text">
                                <li className="timeline-info">
                                    <h4 className="timeline-header">Started learning to code</h4>
                                    <p className="timeline-desc">A few sentences on how it began — what pulled you in, first language, first "aha" moment.</p>
                                    <span className="tag dark-tag">Start</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer 
                    variant="light"
                    nextSection={{ label: 'Hobbies', href: '/hobbies'}}
                />
            </div>
        </>
    )
}

export default JourneyDetails