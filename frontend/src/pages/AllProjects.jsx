// src/pages/AllProjects.jsx

// imports
import Header from '../components/HeaderPages.jsx'
import Footer from '../components/FooterDark.jsx'

function AllProjects() {
    return (
        <>
            <Header />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">All Projects</div>
                    <h1 className="details-header-lg">Everything I've built.</h1>
                    <div className="header-blurb">The three on my homepage are what I'd point you to first — this is the fuller list, including smaller experiments, coursework, and side builds.</div>
                </div>
                <div className="all-projects-details-content">
                    <div className="filter-container">
                        <span className="filter-pill active">All</span>
                        <span className="filter-pill">React</span>
                        <span className="filter-pill">Express</span>
                        <span className="filter-pill">Node.js</span>
                        <span className="filter-pill">Prisma</span>
                        <span className="filter-pill">PostgreSQL</span>
                        <span className="filter-pill">Design</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllProjects

/* 
TODO:
add filter functionality
*/