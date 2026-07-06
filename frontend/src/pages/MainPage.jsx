// src/pages/MainPage.jsx

// imports
import Header from '../components/Header.jsx'
import CreditFooter from '../components/CreditFooter.jsx'

import heroImage from '../assets/hero-image.jpg'

/* 
layout

"hero" panel (basic blurb, image)
about (+ tech skills) +link to detailed about page
projects (3 main projects) +link to detailed projects page
journey (currently + brief timeline) +link to detailed journey page
hobbies (some interests) +link to detailed hobbies page
contact (github, linkedin, email, resume)
*/

function MainPage() {
    return (
        <>
            <Header />
            <div className="main-page">
                <div id="hero" className="panel">
                    <div className="hero-left">
                        <div className="label">// developer & designer</div>
                        <h1 className="hero-title">Hi, I<br />build things.</h1>
                        <p className="hero-content content">Software developer focused on clean, functional interfaces and thoughtful engineering. This is where I keep my work, my path, and a few things I make for fun.</p>
                    </div>
                    <img
                        src={heroImage}
                        alt="hero image"
                        className="hero-image"
                    />
                </div>

                <div id="about" className="panel">
                    technical skills here
                    <div className="about-right">
                        <div className="label">01 — About</div>
                        <h1 className="about-title">A bit<br />about me.</h1>
                            <p className="about-content content">Short paragraph about who you are, what kind of developer you are, and what you care about when building things.</p>
                            <p className="about-content content">Second short paragraph — background, focus area, or what you're currently drawn to.</p>
                            <a href="/about" className="details-link">→ Full about & skills page</a>
                    </div>
                </div>

                <div id="projects" className="panel">
                    <div className="label">02 — Projects</div>
                </div>

                <div id="journey" className="panel">
                    <div className="label">03 — Journey</div>
                </div>

                <div id="art" className="panel">
                    <div className="label">04 — Art</div>
                </div>

                <div id="contact" className="panel">
                    <div className="label">05 — Contact</div>
                </div>
            </div>
            <CreditFooter />
        </>
    )
}

export default MainPage