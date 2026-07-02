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
            </div>
            <CreditFooter />
        </>
    )
}

export default MainPage