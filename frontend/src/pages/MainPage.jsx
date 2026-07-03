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
                <div className="label">// developer & designer</div>
                </div>

                <div id="about">
                    <div className="label">01 — About</div>
                </div>

                <div id="projects">
                    <div className="label">02 — Projects</div>
                </div>

                <div id="journey">
                    <div className="label">03 — Journey</div>
                </div>

                <div id="art">
                    <div className="label">04 — Art</div>
                </div>

                <div id="contact">
                    <div className="label">05 — Contact</div>
                </div>
            </div>
            <CreditFooter />
        </>
    )
}

export default MainPage