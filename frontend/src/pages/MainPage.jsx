// src/pages/MainPage.jsx

// imports
import Header from '../components/Header.jsx'
import CreditFooter from '../components/CreditFooter.jsx'

/* 
layout

"hero" panel (basic blurb, image)
about (+ tech skills) +link to detailed about page
projects (3 main projects) +link to detailed projects page
journey (currently + brief timeline) +link to detailed journey page
hobbies (some interests) +link to detailed hobbies page
contact (github, linkedin, email, resume)

footer (name and link to github)
*/

function MainPage() {
    return (
        <>
            <Header />
            <div className="main-page">
                <div id="hero">
                    i'm the hero section
                </div>

                <div id="about">
                    01 - ABOUT
                </div>

                <div id="projects">
                    02 - PROJECTS
                </div>

                <div id="journey">
                    03 - JOURNEY
                </div>

                <div id="art">
                    04 - ART
                </div>

                <div id="contact">
                    05 - CONTACT
                </div>
            </div>
            <CreditFooter />
        </>
    )
}

export default MainPage