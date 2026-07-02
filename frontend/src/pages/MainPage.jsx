// src/pages/MainPage.jsx

// imports
import Header from '../components/Header.jsx'
import CreditFooter from '../components/CreditFooter.jsx'

/* 
layout

header (logo, name, anchor links: about / projects / journey / art / contact) (sticky)

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
                hello i'm the main page

                <div id="hero">
                    i'm the hero section
                </div>

                <div id="about">
                    i'm the about section
                </div>

                <div id="projects">
                    i'm the projects section
                </div>

                <div id="journey">
                    i'm the journey section
                </div>

                <div id="art">
                    i'm the art section
                </div>

                <div id="contact">
                    i'm the contact section
                </div>
            </div>
            <CreditFooter />
        </>
    )
}

export default MainPage