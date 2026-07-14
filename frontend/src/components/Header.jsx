// src/components/Header.jsx

// imports
import { HashLink as Link } from 'react-router-hash-link';

function Header({ variant }) {
    return (
        <div className={`header ${variant === "dark" ? 'dark-header' : ''}`}>
            <div className="header-left">
                <Link to="/">
                    <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x icon-background"></i>
                        <i className="fa-solid fa-mug-hot fa-stack-1x icon"></i>
                    </span>
                </Link>
                <h3 className={`header-title ${variant === "dark" ? 'dark-title' : ''}`}>Adrien Newman</h3>
            </div>
            <nav className="header-right">
                <Link to="/" className={`back-link ${variant === "dark" ? 'dark-link' : ''}`}>← Back to portfolio</Link>
            </nav>
        </div>
    )
}

export default Header

/*
header dark-header / header
header-left
header-title dark-title / header-title
header-right
back-link dark-link / back-link
*/