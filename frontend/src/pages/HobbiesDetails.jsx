// src/pages/HobbiesDetails.jsx

// imports
import { useState } from 'react';

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import { hobbyFilters } from "../data/filters";
import hobbies from "../data/hobbies";

function HobbiesDetails() {
    const [filter, setFilter] = useState("All");

    return (
        <>
            <title>Art & Hobbies</title>
            <Header 
                variant="light"
            />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">Art & Hobbies</div>
                    <h1 className="details-header-lg">Outside the editor.</h1>
                    <div className="header-blurb">A closer look at what I make and do when I'm away from a keyboard — sketches, photos, and whatever else I've been into lately.</div>
                </div>
                <div className="hobby-details-content">
                <div className="filter-container">
                        {hobbyFilters.map((option, index) => 
                            <span 
                                key={index} 
                                className={`filter-pill ${option === filter ? 'active' : ''}`}
                                onClick={() => setFilter(option)}
                            >{option}</span>
                        )}
                    </div>
                    <div className="hobby-card-container">
                        {hobbies.filter(hobby => filter === "All" || hobby.type.includes(filter)).map(hobby =>
                            <a href={hobby.image} className="hobby-url">
                                <div className="hobby-card">
                                    <img
                                        src={hobby.image}
                                        alt="hobby image"
                                        className="hobby-image"
                                    />
                                    <div className="hobby-caption">
                                        <h4>{hobby.title}</h4>
                                        <span>{hobby.type} · {hobby.year}</span>
                                    </div>
                                </div>
                                <i className="fa-solid fa-magnifying-glass hobby-magnify"></i>
                            </a>
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