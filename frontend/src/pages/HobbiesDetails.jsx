// src/pages/HobbiesDetails.jsx

// imports
import Header from '../components/HeaderPages.jsx'
import Footer from '../components/Footer.jsx'

import hobbies from "../data/hobbies";

function HobbiesDetails() {
    return (
        <>
            <title>Art & Hobbies</title>
            <Header />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">Art & Hobbies</div>
                    <h1 className="details-header-lg">Outside the editor.</h1>
                    <div className="header-blurb">A closer look at what I make and do when I'm away from a keyboard — sketches, photos, and whatever else I've been into lately.</div>
                </div>
                <div className="art-details-content">
                    <div className="filter-container">
                        <span className="filter-pill active">All</span>
                        <span className="filter-pill">Digital Art</span>
                        <span className="filter-pill">Crochet</span>
                        <span className="filter-pill">Gaming</span>
                        <span className="filter-pill">Baking</span>
                        <span className="filter-pill">Reading</span>
                        <span className="filter-pill">Gardening</span>
                        <span className="filter-pill">Cats</span>
                    </div>
                    <div className="art-card-container">
                        {hobbies.map(hobby =>
                            <div className="art-card">
                                <img
                                    src={hobby.image}
                                    alt="art image"
                                    className="hobby-image"
                                />
                                <div className="art-caption">
                                    <h4>{hobby.title}</h4>
                                    <span>{hobby.type} · {hobby.year}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer 
                variant="dark"
                nextSection={{ label: 'Home', href: '/'}}
            />
        </>
    )
}

export default HobbiesDetails

/* 
TODO:
add filter functionality
*/