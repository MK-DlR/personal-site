// src/pages/HobbiesDetails.jsx

// imports
import { useState } from 'react';

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Modal from '../components/Modal.jsx';

import { hobbyFilters } from "../data/filters";
import hobbies from "../data/hobbies";

function HobbiesDetails() {
    const [filter, setFilter] = useState("All");
    const [selectedHobby, setSelectedHobby] = useState(null);

    const handleOpen = (chosenHobby) => {
        setSelectedHobby(chosenHobby);
    };

    const handleClose = () => {
        setSelectedHobby(null);
    };

    return (
        <>
            {selectedHobby && 
                <Modal isOpen={!!selectedHobby} onClose={handleClose}>
                    <>
                        <img
                            src={selectedHobby.image}
                            alt="hobby image"
                            className="hobby-fullsize"
                        />
                    </>
                </Modal>
            }

            <title>Art & Hobbies</title>
            <Header 
                variant="light"
            />
            <div className="details-page">
                <div className="details-page-header">
                    <div className="label">Art & Hobbies</div>
                    <h1 className="details-header-lg">Outside the editor.</h1>
                    <div className="header-blurb">A collection of some of my hobbies and art that I've created outside of coding. You'll find a lot of cats and crochet, since one likes to help me when I'm working and the other is a good way to wind down from work.</div>
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
                            <div key={hobby.id}>
                                <div className="hobby-card">
                                    <div className="hobby-magnify-positioning">
                                        <img
                                            src={hobby.image}
                                            alt="hobby image"
                                            className="hobby-image"
                                            onClick={() => handleOpen(hobby)}
                                        />
                                        <i className="fa-solid fa-magnifying-glass hobby-magnify"></i>
                                    </div>
                                    <div className="hobby-caption">
                                        <h4>{hobby.title}</h4>
                                        <span>{hobby.type} · {hobby.year}</span>
                                        {hobby.type === "Crochet" && (
                                            <span> · <a href={hobby.url} 
                                                        className="hobby-url"
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >Ravelry</a>
                                            </span>
                                        )}
                                    </div>
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