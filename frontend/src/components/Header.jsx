// src/components/Header.jsx

// imports
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/">[Logo]</Link>
                Adrien Newman
            </div>
            <div className="header-right">
                <Link to="/#about" className="header-link">ABOUT</Link>
                <Link to="/#projects" className="header-link">PROJECTS</Link>
                <Link to="/#journey" className="header-link">JOURNEY</Link>
                <Link to="/#art" className="header-link">ART</Link>
                <Link to="/#contact" className="header-link">CONTACT</Link>
            </div>
        </div>
    )
}

export default Header