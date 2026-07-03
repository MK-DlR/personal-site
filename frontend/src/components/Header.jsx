// src/components/Header.jsx

// imports
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/"><i className="fa-solid fa-mug-hot icon"></i></Link>
                <h3>Adrien Newman</h3>
            </div>
            <div className="header-right">
                <Link to="/#about" className="nav-link">About</Link>
                <Link to="/#projects" className="nav-link">Projects</Link>
                <Link to="/#journey" className="nav-link">Journey</Link>
                <Link to="/#art" className="nav-link">Art</Link>
                <Link to="/#contact" className="nav-link">Contact</Link>
            </div>
        </div>
    )
}

export default Header