// src/components/Header.jsx

// imports
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/">[Logo]</Link>
                Name
            </div>
            <div className="header-right">
                <Link to="/#about" className="header-link">About</Link>
                <Link to="/#projects" className="header-link">Projects</Link>
                <Link to="/#journey" className="header-link">Journey</Link>
                <Link to="/#art" className="header-link">Art</Link>
                <Link to="/#contact" className="header-link">Contact</Link>
            </div>
        </div>
    )
}

export default Header