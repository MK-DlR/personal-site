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

/*
milestones for timeline:
feb 2024 
Started learning to code in my free time
Began The Odin Project's Foundations course.

apr 2025
Began focusing on learning to code fulltime
Completed Foundations and began the Full Stack JavaScript course.

may 205
started javascript course within full stack js

jul 2025
First real project shipped
Completed a "Battleship" style game.

sept 2025
started react course

sept 2025
completed first real react project
memory card game

oct 2025
completed react course / started databases course

oct 2025
completed databases course / started nodejs course

nov 2025
completed first real express project
mini message board

nov 2025
completed ??? project
inventory management app

nov 2025
completed first real authentication project
members only

dec 2025
completed first real orm project
file uploader

feb 2026
completed first real api project
blog api

feb 2026
First real full stack project shipped
Completed a "Where's Waldo" style game.

mar 2026
completed second full stack project
messaging app

(future)
date
completed final project
odinbook

date
completed nodejs course

date
completed the odin project full stack javascript course
*/