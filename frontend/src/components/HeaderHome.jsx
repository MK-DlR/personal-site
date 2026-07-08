// src/components/HeaderHome.jsx

// imports
import { HashLink as Link } from 'react-router-hash-link';

function HeaderHome() {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/#hero">
                    <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                        <i className="fa-solid fa-mug-hot fa-stack-1x icon"></i>
                    </span>
                </Link>
                <h3 className="header-title">Adrien Newman</h3>
            </div>
            <nav className="header-right">
                <Link to="/#about" className="nav-link">About</Link>
                <Link to="/#projects" className="nav-link">Projects</Link>
                <Link to="/#journey" className="nav-link">Journey</Link>
                <Link to="/#art" className="nav-link">Art</Link>
                <Link to="/#contact" className="nav-link">Contact</Link>
            </nav>
        </div>
    )
}

export default HeaderHome